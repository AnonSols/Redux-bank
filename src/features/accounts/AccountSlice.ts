// import { Dispatch } from "redux";
// import { AccountAction } from "../../types/accountTypes";
// import { CURRENCY_URL, REDUCER_ACCOUNT_ACTION } from "../../types/actionEnums";
// import { RootState } from "../../store";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return;

      state.loan = action.payload.loanAmount;
      state.loanPurpose = action.payload.loanPurpose;
      state.balance = action.payload.loanAmount + state.balance;
    },
    payLoan(state) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
  },
});

export const { deposit, withdraw, payLoan, requestLoan } = accountSlice.actions;
export default accountSlice.reducer;
/*
export function bankReducer(
  state: typeof InitialState = InitialState,
  action: AccountAction
): typeof InitialState {
  switch (action.type) {
    case REDUCER_ACCOUNT_ACTION.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };

    case REDUCER_ACCOUNT_ACTION.ISLOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REDUCER_ACCOUNT_ACTION.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case REDUCER_ACCOUNT_ACTION.REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.loanAmount,
        loanPurpose: action.payload.loanPurpose,

        balance: action.payload.loanAmount
          ? action.payload.loanAmount + state.balance
          : 0,
      };

    case REDUCER_ACCOUNT_ACTION.PAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

export function deposit(amount: number, currency: string) {
  if (currency === "USD")
    return (dispatch: Dispatch<AccountAction>) =>
      dispatch({
        type: REDUCER_ACCOUNT_ACTION.DEPOSIT,
        payload: amount,
        isLoading: false,
      });

  return async function (dispatch: Dispatch<AccountAction>) {
    try {
      dispatch({ type: REDUCER_ACCOUNT_ACTION.ISLOADING });
      const res = await fetch(
        `https://${CURRENCY_URL.HOST}/latest?amount=10&from=${currency}&to=USD`
      );

      const data = await res.json();
      const currentAmount = data.rates.USD;

      dispatch({
        type: REDUCER_ACCOUNT_ACTION.DEPOSIT,
        payload: currentAmount,
        isLoading: false,
      });
    } catch (e) {
      console.log((e as Error).message);
    }
  };
}

export function withdraw(amount: number) {
  return (dispatch: Dispatch<AccountAction>) =>
    dispatch({
      type: REDUCER_ACCOUNT_ACTION.WITHDRAW,
      payload: amount,
    });
}

export function requestLoan(amount: number, loanPurpose: string) {
  return (dispatch: Dispatch<AccountAction>) =>
    dispatch({
      type: REDUCER_ACCOUNT_ACTION.REQUEST_LOAN,
      payload: {
        loanAmount: amount,
        loanPurpose,
      },
    });
}

export function payloan() {
  return (dispatch: Dispatch<AccountAction>) =>
    dispatch({ type: REDUCER_ACCOUNT_ACTION.PAY_LOAN });
}
*/
