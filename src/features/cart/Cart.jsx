import Button from "../../ui/Button";
import CartItem from "./CartItem";
import LinkButton from "./../../ui/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import EmptyCart from './EmptyCart';

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
  const { t, i18n } = useTranslation();


  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className="font-sans">
      <LinkButton to="/menu"> &larr; {t("cart.link")}</LinkButton>
      <h2 className="mt-3 text-2xl font-semibold capitalize">
        {t("cart.text")}, {username}
      </h2>
      <ul className="my-4 divide-y-2 divide divide-stone-400">
        {cart.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </ul>
      <div className="space-x-4">
        <Button to="/order/new">{t("cart.orderBtn")}</Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          {t("cart.clearBtn")}
        </Button>
      </div>
    </div>
  );
}

export default Cart;
//  git hub push qilish