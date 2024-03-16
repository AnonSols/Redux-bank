import { combineReducers } from "redux";
import { bankReducer } from "./bankReducer";

export const Reducers = combineReducers({
  bank: bankReducer,
});
