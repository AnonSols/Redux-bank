import { ActionEnum } from "../action-type-logic";

interface DepostiAction {
  type: ActionEnum.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionEnum.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionEnum.BANKRUPT;
}
export type Action = DepostiAction | WithdrawAction | BankruptAction;
