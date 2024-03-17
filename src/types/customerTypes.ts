import { REDUCER_CUSTOMER_ACTION } from "./actionEnums";

interface CreateCustomer {
  type: REDUCER_CUSTOMER_ACTION.CREATE_CUSTOMER;
  payload: {
    fullname: string;
    nationalId: string;
    currentTime: string;
  };
}

interface UpdateCustomer {
  type: REDUCER_CUSTOMER_ACTION.UPDATE_CUSTOMER;
  payload: string;
}

interface ResetCustomer {
  type: REDUCER_CUSTOMER_ACTION.RESET;
}

export type CustomerAction = CreateCustomer | UpdateCustomer | ResetCustomer;
