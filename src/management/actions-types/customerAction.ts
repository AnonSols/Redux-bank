import { REDUCER_CUSTOMER_ACTION } from "../action-enum";

interface CreateCustomer {
  type: REDUCER_CUSTOMER_ACTION.CREATE_CUSTOMER;
  payload: {
    fullname: string;
    nationalId: string;
    currentTime: Date;
  };
}

interface UpdateCustomer {
  type: REDUCER_CUSTOMER_ACTION.UPDATE_CUSTOMER;
  payload: string;
}

export type CustomerAction = CreateCustomer | UpdateCustomer;
