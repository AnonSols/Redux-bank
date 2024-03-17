import { Dispatch } from "redux";
import { CustomerAction, REDUCER_CUSTOMER_ACTION } from "../../types";

const customerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export function customerReducer(
  state: typeof customerState = customerState,
  action: CustomerAction
): typeof customerState {
  switch (action.type) {
    case REDUCER_CUSTOMER_ACTION.CREATE_CUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.currentTime,
      };

    case REDUCER_CUSTOMER_ACTION.UPDATE_CUSTOMER:
      return {
        ...state,
        fullName: action.payload,
      };

    case REDUCER_CUSTOMER_ACTION.RESET:
      return {
        ...state,
        fullName: "",
        nationalId: "",
      };

    default:
      return state;
  }
}

export function createCustomer(name: string, id: string) {
  return (dispatch: Dispatch<CustomerAction>) => {
    dispatch({
      type: REDUCER_CUSTOMER_ACTION.CREATE_CUSTOMER,
      payload: {
        nationalId: id,
        fullname: name,
        currentTime: new Date().toISOString(),
      },
    });
  };
}

export function updateCustomer(fullname: string) {
  return (dispatch: Dispatch<CustomerAction>) =>
    dispatch({
      type: REDUCER_CUSTOMER_ACTION.UPDATE_CUSTOMER,
      payload: fullname,
    });
}

export function resetCustomer() {
  return (dispatch: Dispatch<CustomerAction>) =>
    dispatch({ type: REDUCER_CUSTOMER_ACTION.RESET });
}
