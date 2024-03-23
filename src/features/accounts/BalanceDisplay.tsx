import { useSelector } from "react-redux";
import { State } from "../../store-v1";
function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((store: State) => store.accounts);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
