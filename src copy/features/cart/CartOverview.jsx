import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { Link } from "react-router-dom";

function CartOverview() {
  const totaLPizzaQty = useSelector(getTotalQuantity);
  const totalPizzaPrice = useSelector(getTotalPrice);
  if (totaLPizzaQty < 1) return null;
  return (
    <div className="bg-stone-700 text-stone-200 py-4 px-4 uppercase font-semibold text-sm sm: p-6 sm:text-base flex justify-between items-center">
      <p className="text-stone-300 space-x-4 sm:space-x-6">
        <span>{totaLPizzaQty} Pizzas</span>
        <span>{totalPizzaPrice}</span>
      </p>
      <Link to="/cart" className="text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
