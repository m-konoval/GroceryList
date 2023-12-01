import store from "../../core/store";
import { setList } from "../../core/store/modules/mainSlice";
import { selectList } from "../../core/store/selectors/mainSelectors";
import { TGroceryItem } from "../models/models";

export function addGroceryItem(item: TGroceryItem) {
  const list = selectList(store.getState());
  const newList = [...list, item];

  store.dispatch(setList(newList));
}

export function updateGroceryItem(item: TGroceryItem) {
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

export function removeGroceryItem(item: TGroceryItem) {
  const list = selectList(store.getState());
  const copy = [...list];
  const newList = copy.filter((i) => i.id !== item.id);

  console.log("REMOVE", { newList });

  store.dispatch(setList(newList));
}
