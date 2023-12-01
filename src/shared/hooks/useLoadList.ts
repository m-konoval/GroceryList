import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { EStorageKeys } from "../constants/constants";
import { setList } from "../../core/store/modules/mainSlice";
import store from "../../core/store";

export default function useLoadList() {
  const handleLoad = async () => {
    try {
      const json = await AsyncStorage.getItem(EStorageKeys.list);
      const list = json ? JSON.parse(json) : [];

      console.log("List loading", { json, list });

      store.dispatch(setList(list));
    } catch (error) {
      console.log("ERROR on load list", { error });
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);
}
