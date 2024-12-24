import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }) {
  const dispatch = useDispatch()
  const { pizzaId, name, quantity, totalPrice } = item;
  // const deleteFromCart = useDispatch();
  return (
    <li className="py-2 list-none flex items-center justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex gap-8 items-center">
        <p className="font-semibold text-sm">{formatCurrency(totalPrice)}</p>
        <Button type="sm" onClick={() => dispatch(deleteFromCart(pizzaId))} >Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;