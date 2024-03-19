import { Dispatch } from "redux";
import { AccountAction } from "../../types/accountTypes";
import { CURRENCY_URL, REDUCER_ACCOUNT_ACTION } from "../../types/actionEnums";

const InitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function bankReducer(
  state: typeof InitialState = InitialState,
  action: AccountAction
): typeof InitialState {
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

export function deposit(amount: number, currency: string) {
  if (currency === "USD")
    return (dispatch: Dispatch<AccountAction>) =>
      dispatch({
        type: REDUCER_ACCOUNT_ACTION.DEPOSIT,
        payload: amount,
      });

  return async function (dispatch, getState) {
    try {
      const res = await fetch(
        `https://${CURRENCY_URL}/latest?amount=10&from=${currency}&to=USD`
      );

      const data = res.json();
      console.log(data);
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
