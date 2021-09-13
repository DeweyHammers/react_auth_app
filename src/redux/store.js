import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducers from "./userReducers";

const store = createStore(
  userReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
