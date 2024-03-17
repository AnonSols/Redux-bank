import { REDUCER_CUSTOMER_ACTION } from "../action-enum";
import { CustomerAction } from "../actions-types/customerAction";

const customerState = {
  fullName: "",
  nationalId: "",
};

function customerReducer(
  state: typeof customerState = customerState,
  action: CustomerAction
): typeof customerState {
  switch (action.type) {
    case REDUCER_CUSTOMER_ACTION.CREATE_CUSTOMER:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export customerReducer