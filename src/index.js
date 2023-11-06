import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "tachyons";
import { requestRobots, searchRobots } from "./reducers";

const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger),
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
