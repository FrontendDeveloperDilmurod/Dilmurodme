import Button from "../../ui/Button";
import CartItem from "./CartItem";
import LinkButton from "./../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const username = useSelector((user) => user.user.username);
  const cart = useSelector((state) => state.cart.carts);

  const clearCart = useDispatch();
  // const cart = fakeCart;

  return (
    <div className="font-sans">
      <LinkButton to="/menu"> &larr; Back to menu</LinkButton>
      <h2 className="text-2xl font-semibold mt-3 capitalize">
        Your cart, {username}
      </h2>
      <ul className="divide divide-stone-400 divide-y-2 my-4">
        {cart.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </ul>
      <div className="space-x-4">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
