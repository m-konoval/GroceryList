import { useSelector } from "react-redux";
import { selectList } from "../../../core/store/selectors/mainSelectors";
import { useMemo, useState } from "react";
import { TGloceryItem, TVal } from "../../../shared/models/models";
import {
  removeGloceryItem,
  updateGloceryItem,
} from "../../../shared/helpers/mutateList";
import {
  EScreens,
  EStatus,
  EStatusOptions,
} from "../../../shared/constants/constants";
import { useNavigation } from "@react-navigation/native";

export const FilterOptions = ["all", ...EStatusOptions];

export default function useListDispay() {
  const navigation = useNavigation();

  const [filter, setFiler] = useState(FilterOptions[0]);

  const list = useSelector(selectList);

  const dispalyList = useMemo(() => {
    const filtered = list.filter((item) => handleFilter(item, filter));

    return handleSort(filtered);
  }, [list, filter]);

  const onChangeFilter = (value: TVal): void => {
    setFiler(String(value));
  };

  const onToggleItemStatus = (item: TGloceryItem): void => {
    const newItem: TGloceryItem = {
      ...item,
      status: item.status === EStatus.have ? EStatus.out : EStatus.have,
      date: new Date(),
    };

    updateGloceryItem(newItem);
  };

  const onRemoveItem = (item: TGloceryItem): void => {
    removeGloceryItem(item);
  };

  const onGoToDetails = (id: number): void => {
    navigation.navigate({ name: EScreens.Details, params: { id } } as never); // TODO: never
  };

  return {
    dispalyList,
    filter,
    onToggleItemStatus,
    onRemoveItem,
    onChangeFilter,
    onGoToDetails,
  };
}

function handleFilter(item: TGloceryItem, filter: string): boolean {
  if (filter === FilterOptions[0]) return true;

  return item.status === filter;
}

function handleSort(list: TGloceryItem[]): TGloceryItem[] {
  if (!list?.length) return [];

  const grouped = list.reduce((acc, item) => {
    acc[item.priority] = acc[item.priority] || [];
    acc[item.priority].push(item);

    return acc;
  }, Object.create(null));

  const keys = Object.keys(grouped).sort();

  keys.forEach((key) => {
    grouped[key].sort((a: TGloceryItem, b: TGloceryItem) =>
      a.name.localeCompare(b.name)
    );
  });

  return keys.reduce((acc, key) => {
    const subList = grouped[key];

    return acc.concat(subList);
  }, []);
}
