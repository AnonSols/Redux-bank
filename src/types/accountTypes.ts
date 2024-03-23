import { REDUCER_ACCOUNT_ACTION } from "./actionEnums";

interface Deposit {
  type: REDUCER_ACCOUNT_ACTION.DEPOSIT;
  payload: number;
}

interface Withdraw {
  type: REDUCER_ACCOUNT_ACTION.WITHDRAW;
  payload: number;
}

interface Loading {
  type: REDUCER_ACCOUNT_ACTION.ISLOADING;
}

interface RequestLoan {
  type: REDUCER_ACCOUNT_ACTION.REQUEST_LOAN;
  payload: {
    loanAmount: number;
    loanPurpose: string;
  };
}

interface PayLoan {
  type: REDUCER_ACCOUNT_ACTION.PAY_LOAN;
}
export type AccountAction =
  | Deposit
  | Withdraw
  | RequestLoan
  | PayLoan
  | Loading;
