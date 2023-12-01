import { useEffect, useState } from "react";
import { TVal } from "../../models/models";

export interface IUseLineSelector {
  value: TVal;
  select: (value: TVal) => void;
}

export default function useLineSelector({ select, value }: IUseLineSelector) {
  const [selected, setSelected] = useState<TVal>("");

  useEffect(() => {
    if (selected !== value) setSelected(value);
  }, [value]);

  const onSelect = (value: TVal) => {
    setSelected(value);
    select(value);
  };

  return {
    selected,
    onSelect,
  };
}
