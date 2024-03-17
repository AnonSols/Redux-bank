import { useSelector } from "react-redux";
import { State } from "../../store";

function Customer() {
  const { fullName } = useSelector((state: State) => state.customers);
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
