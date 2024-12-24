import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "./cartSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CartOverview() {
  const totaLPizzaQty = useSelector(getTotalQuantity);
  const totalPizzaPrice = useSelector(getTotalPrice);

  const { t, i18n } = useTranslation();
  if (totaLPizzaQty < 1) return null;
  return (
    <div className="bg-stone-700 text-stone-200 py-4 px-4 uppercase font-semibold text-sm sm: p-6 sm:text-base flex justify-between items-center">
      <p className="text-stone-300 space-x-4 sm:space-x-6">
        <span>{totaLPizzaQty} {t("footer.pizzas")}</span>
        <span>{totalPizzaPrice}</span>
      </p>
      <Link to="/cart" className="text-stone-200">
       {t("footer.link")} &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
