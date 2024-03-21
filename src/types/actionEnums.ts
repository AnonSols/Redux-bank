export enum REDUCER_ACCOUNT_ACTION {
  DEPOSIT = "account/deposit",
  WITHDRAW = "account/withdraw",
  LOAN_PURPOSE = "account/loan_purpose",
  REQUEST_LOAN = "account/request_loan",
  PAY_LOAN = "account/pay_loan",
  RESET = "account/reset",
  ISLOADING = "account/isLoading",
}

export enum REDUCER_CUSTOMER_ACTION {
  CREATE_CUSTOMER = "customer/create_customer",
  UPDATE_CUSTOMER = "customer/update_customer",
  RESET = "customer/reset",
}

export enum CURRENCY_URL {
  HOST = "api.frankfurter.app",
}
