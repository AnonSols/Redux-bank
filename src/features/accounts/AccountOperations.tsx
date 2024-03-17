import { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { ActionCreators } from "../../types";
import { useSelector } from "react-redux";
import { Store } from "../../store";

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

  const { loan, loanPurpose: purpose } = useSelector(
    (store: Store) => store.accounts
  );
  function handleDeposit(amount: number) {
    deposit(amount);
    setDepositAmount("");
  }

  function handleWithdrawal(amount: number) {
    withdraw(amount);
    setWithdrawalAmount("");
  }

  function handleRequestLoan(amount: number, purpose: string) {
    if (!loanAmount || !loanPurpose) return;
    requestLoan(amount, purpose);
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
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
          <span>
            Pay back{" "}
            {loan ? (
              <>
                {loan} for {purpose}{" "}
              </>
            ) : (
              " "
            )}
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
