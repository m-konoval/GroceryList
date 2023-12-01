import store from "../../core/store";
import { setList } from "../../core/store/modules/mainSlice";
import { selectList } from "../../core/store/selectors/mainSelectors";
import { TGloceryItem } from "../models/models";

export function addGloceryItem(item: TGloceryItem) {
  const list = selectList(store.getState());
  const newList = [...list, item];

  store.dispatch(setList(newList));
}

export function updateGloceryItem(item: TGloceryItem) {
  const list = selectList(store.getState());
  const copy = [...list];
  const idx = copy.findIndex((i) => i.id === item.id);

  if (idx == -1) return;

  copy[idx] = {
    ...item,
  };

  console.log("UPDATE", { item, newI: copy[idx], copy, idx });

  store.dispatch(setList(copy));
}

export function removeGloceryItem(item: TGloceryItem) {
  const list = selectList(store.getState());
  const copy = [...list];
  const newList = copy.filter((i) => i.id !== item.id);

  console.log("REMOVE", { newList });

  store.dispatch(setList(newList));
}
