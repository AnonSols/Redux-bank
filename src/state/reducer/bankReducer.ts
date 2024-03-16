import { ActionEnum } from "../action-type-logic";
import { Action } from "../actions";

const initialState = 0;

function reducer(state: number = initialState, action: Action) {
  switch (action.type) {
    case ActionEnum.DEPOSIT:
      return state + action.payload;
    case ActionEnum.WITHDRAW:
      return state - action.payload;
    case ActionEnum.BANKRUPT:
      return 0;

    default:
      return state;
  }
}

export default reducer;
