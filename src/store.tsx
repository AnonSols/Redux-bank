import { Dispatch, combineReducers, createStore } from "redux";

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

function bankReducer(
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

const reducer = combineReducers({
  bankReducer,
});

const store = createStore(reducer);

store.dispatch(deposit);
console.log(store.getState());

// store.dispatch(withdraw);
// console.log(store.getState());

// store.dispatch({
//   type: REDUCER_ACCOUNT_ACTION.REQUEST_LOAN,
//   payload: { loanAmount: 10000, loanPurpose: "pay school fees" },
// });
// console.log(store.getState());

// store.dispatch({
//   type: REDUCER_ACCOUNT_ACTION.PAY_LOAN,
// });
// console.log(store.getState());

function pay_loan() {
  return {
    type: REDUCER_ACCOUNT_ACTION.PAY_LOAN,
  };
}

function deposit(amount: number) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REDUCER_ACCOUNT_ACTION.DEPOSIT,
      payload: amount,
    });
  };
}

function withdraw(amount: number) {
  return {
    type: REDUCER_ACCOUNT_ACTION.WITHDRAW,
    payload: { value: amount },
  };
}

function request_loan(amount: number, purpose: string) {
  return {
    type: REDUCER_ACCOUNT_ACTION.REQUEST_LOAN,
    payload: { loanAmount: amount, loanPurpose: purpose },
  };
}
