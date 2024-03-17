import { useSelector } from "react-redux";
import { State } from "../../store";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((state: State) => state.accounts);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
