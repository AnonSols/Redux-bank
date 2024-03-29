import { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State } from "../../store-v1";
import { ActionCreators } from "../../types";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const { deposit, withdraw, requestLoan, payLoan } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const {
    loan,
    loanPurpose: purpose,
    isLoading,
  } = useSelector((store: State) => store.accounts);
  function handleDeposit(amount: number, currency: string) {
    deposit(amount, currency);

    setDepositAmount("");
    setCurrency("USD");
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
    payLoan();
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

          {isLoading ? (
            <strong> Converting curreny </strong>
          ) : (
            <button
              onClick={() => handleDeposit(Number(depositAmount), currency)}
            >
              Deposit {depositAmount}{" "}
            </button>
          )}
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
          {loan ? (
            <>
              {" "}
              <span>
                Pay back {loan} for ({purpose}){" "}
              </span>
              <button onClick={handlePayLoan}>Pay loan</button>
            </>
          ) : (
            " "
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
