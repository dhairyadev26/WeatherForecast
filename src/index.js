/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root")
);




// Commit: hotfix @ 2024-10-15T11:24:18
