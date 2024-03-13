const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type REDUCER_TYPE = {
  type: REDUCER_ACCOUNT_ACTION;
  payload?: 0;
};

enum REDUCER_ACCOUNT_ACTION {
  BALANCE,
  WITHDRAW,
  LOAN_PURPOSE,
  REQUEST_LOAN,
  PAY_LOAN,
}

function reducer(
  state: typeof initialState = initialState,
  action: REDUCER_TYPE
): typeof initialState {
  switch (action.type) {
    case REDUCER_ACCOUNT_ACTION.BALANCE:
      return {
        ...state,
        balance: action.payload ? state.balance + action.payload : 0,
      };

    case REDUCER_ACCOUNT_ACTION.WITHDRAW:
      return {
        ...state,
        balance: action.payload ? state.balance - action.payload : 0,
      };

    case REDUCER_ACCOUNT_ACTION.REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan === 0 && action.payload ? action.payload : 0,
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

export default reducer;
