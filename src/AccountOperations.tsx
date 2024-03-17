import { useState } from "react";
import { bindActionCreators } from "redux";
import { ActionCreators, store } from "./management";
import { useDispatch } from "react-redux";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const { deposit, withdraw, requestLoan, payloan } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  function handleDeposit(amount: number) {
    console.log(store.getState());
    deposit(amount);
    setDepositAmount("");
  }

  function handleWithdrawal(amount: number) {
    console.log(store.getState());
    withdraw(amount);
    setWithdrawalAmount("");
  }

  function handleRequestLoan(amount: number, purpose: string) {
    console.log(store.getState());
    requestLoan(amount, purpose);
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    console.log(store.getState());
    payloan();
    setDepositAmount("");
    setWithdrawalAmount("");
    setLoanAmount("");
    setLoanPurpose("");
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(`${+e.target.value}`)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={() => handleDeposit(Number(depositAmount))}>
            Deposit {depositAmount}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(`${+e.target.value}`)}
          />
          <button onClick={() => handleWithdrawal(Number(withdrawalAmount))}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(`${+e.target.value}`)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button
            onClick={() => handleRequestLoan(Number(loanAmount), loanPurpose)}
          >
            Request loan
          </button>
        </div>

        <div>
          <span>Pay back $X</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
