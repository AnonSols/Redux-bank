import { REDUCER_ACCOUNT_ACTION } from "../action-enum";
import { Action } from "../actions";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function bankReducer(
  state: typeof initialState = initialState,
  action: Action
): typeof initialState {
  switch (action.type) {
    case REDUCER_ACCOUNT_ACTION.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
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