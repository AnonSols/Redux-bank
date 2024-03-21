import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { bankReducer } from "./features/accounts/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";

const rootReducers = combineReducers({
  accounts: bankReducer,
  customers: customerReducer,
});

export const store = createStore(rootReducers, {}, applyMiddleware(thunk));

export type Store = ReturnType<typeof rootReducers>;
export type RootState = ReturnType<typeof store.getState>;
