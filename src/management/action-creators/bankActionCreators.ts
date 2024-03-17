import { Dispatch } from "redux";
import { Action } from "../actions-types/accountAction";
import { REDUCER_ACCOUNT_ACTION } from "../action-enum";

export function deposit(amount: number) {
  return (dispatch: Dispatch<Action>) =>
    dispatch({
      type: REDUCER_ACCOUNT_ACTION.DEPOSIT,
      payload: amount,
    });
}

export function withdraw(amount: number) {
  return (dispatch: Dispatch<Action>) =>
    dispatch({
      type: REDUCER_ACCOUNT_ACTION.WITHDRAW,
      payload: amount,
    });
}

export function requestLoan(amount: number, loanPurpose: string) {
  return (dispatch: Dispatch<Action>) =>
    dispatch({
      type: REDUCER_ACCOUNT_ACTION.REQUEST_LOAN,
      payload: {
        loanAmount: amount,
        loanPurpose,
      },
    });
}

export function payloan() {
  return (dispatch: Dispatch<Action>) =>
    dispatch({ type: REDUCER_ACCOUNT_ACTION.PAY_LOAN });
}
