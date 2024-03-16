import { REDUCER_ACCOUNT_ACTION } from "../action-enum";

interface Deposit {
  type: REDUCER_ACCOUNT_ACTION.DEPOSIT;
  payload: number;
}

interface Withdraw {
  type: REDUCER_ACCOUNT_ACTION.WITHDRAW;
  payload: number;
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
export type Action = Deposit | Withdraw | RequestLoan | PayLoan;
