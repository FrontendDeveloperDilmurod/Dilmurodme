import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { addToCart } from "../cart/cartSlice";
import { formatCurrency } from "./../../utils/helpers";
import { useTranslation } from "react-i18next";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const { t, i18n } = useTranslation();
  function handleAddToCart() {
    dispatch(addToCart({ pizzaId: id, name, unitPrice }));
  }

  return (
    <li className="flex flex-row py-2 gap-4">
      <img
        className={`h-24 ${soldOut && "grayscale opacity-70"}`}
        src={imageUrl}
        alt={name}
      />
      <div className="w-full flex flex-col justify-between font-sans p-1">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="italic text-stone-500 capitalize text-sm tracking-widest">
            {ingredients.join(", ")}
          </p>
        </div>
        <div className="uppercase font-semibold tracking-wide flex justify-between items-center">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>{t("menu.sold")}</p>}
          {!soldOut && (
            <Button type="sm" onClick={handleAddToCart}>
              {t("menu.button")}{" "}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
