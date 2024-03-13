import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

enum REDUCER_ACCOUNT_ACTION {
  DEPOSIT = "account/deposit",
  WITHDRAW = "account/withdraw",
  LOAN_PURPOSE = "account/loan_purpose",
  REQUEST_LOAN = "account/request_loan",
  PAY_LOAN = "account/pay_loan",
}

type REDUCER_TYPE = {
  type: REDUCER_ACCOUNT_ACTION;
  payload?: {
    value?: number;
    loanAmount?: number;
    loanPurpose?: string;
  };
};

function reducer(
  state: typeof initialState = initialState,
  action: REDUCER_TYPE
): typeof initialState {
  switch (action.type) {
    case REDUCER_ACCOUNT_ACTION.DEPOSIT:
      return {
        ...state,
        balance: action.payload?.value
          ? state.balance + action.payload.value
          : 0,
      };

    case REDUCER_ACCOUNT_ACTION.WITHDRAW:
      return {
        ...state,
        balance: action.payload?.value
          ? state.balance - action.payload.value
          : 0,
      };

    case REDUCER_ACCOUNT_ACTION.REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload?.loanAmount ? action.payload.loanAmount : 0,
        loanPurpose: action.payload?.loanPurpose
          ? action.payload.loanPurpose
          : "",
        balance: action.payload?.loanAmount
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

const store = createStore(reducer);

store.dispatch({
  type: REDUCER_ACCOUNT_ACTION.DEPOSIT,
  payload: { value: 500 },
});
console.log(store.getState());

store.dispatch({
  type: REDUCER_ACCOUNT_ACTION.WITHDRAW,
  payload: { value: 200 },
});
console.log(store.getState());

store.dispatch({
  type: REDUCER_ACCOUNT_ACTION.REQUEST_LOAN,
  payload: { loanAmount: 10000, loanPurpose: "pay school fees" },
});
console.log(store.getState());

store.dispatch({
  type: REDUCER_ACCOUNT_ACTION.PAY_LOAN,
});
console.log(store.getState());
