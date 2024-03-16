import { ActionEnum } from "../action-type-logic";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionEnum.BANKRUPT,
    });
  };
};

// snowfall
