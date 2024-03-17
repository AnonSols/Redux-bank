import { applyMiddleware, combineReducers, createStore } from "redux";
import { bankReducer } from "./features/accounts/AccountSlice";
import { customerReducer } from "./features/customers/CustomerSlice";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
  accounts: bankReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducers, {}, applyMiddleware(thunk));

export type State = ReturnType<typeof rootReducers>;
