import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainSlice from "./modules/mainSlice";

const rootReducer = combineReducers({
  main: mainSlice,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

const store = setupStore();

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
