import React from "react";
import { Navigator } from "./src/core/Navigator";
import { Provider } from "react-redux";
import store from "./src/core/store";
import useLoadList from "./src/shared/hooks/useLoadList";

export default function App() {
  useLoadList();

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
