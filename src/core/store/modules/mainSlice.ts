import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGroceryItem } from "../../../shared/models/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EStorageKeys } from "../../../shared/constants/constants";

type TMainInitialState = {
  list: TGroceryItem[];
};

const initialState: TMainInitialState = {
  list: [],
};

const mainSlice = createSlice({
  name: "anchors",
  initialState,
  reducers: {
    setList: (state, { payload }: PayloadAction<TGroceryItem[]>) => {
      state.list = payload;

      AsyncStorage.setItem(EStorageKeys.list, JSON.stringify(payload));
    },
  },
});

export const { setList } = mainSlice.actions;

export default mainSlice.reducer;
