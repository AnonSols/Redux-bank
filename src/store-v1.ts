import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";

export const store = configureStore({
  reducer: {
    accounts: accountReducer,
    customers: customerReducer,
  },
});

// export type Store = ReturnType<typeof rootReducers>;
// export type RootState = ReturnType<typeof store.getState>;
