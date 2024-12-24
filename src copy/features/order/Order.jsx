// Test ID: IIDSAT
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../../src/utils/helpers";
import OrderItem from "./OrderItem";
// import OrderItem from "./OrderItem";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="font-sans">
      <div className="flex justify-between items-center">
        <h2 className="bold text-xl">Status</h2>

        <div className="flex items-center gap-4 uppercase py-4">
          {priority && (
            <span className="bg-red-500 text-white font-semibold py-1 px-4 tracking-widest rounded-full">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-white font-semibold py-1 px-4 tracking-widest rounded-full">
            {status} order
          </span>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between p-5 bg-stone-300">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-stone-300 divide-y my-8">
        {order.cart.map((item) => {
          return <OrderItem item={item} key={item.id} />;
        })}
      </ul>

      <div className="p-5 bg-stone-300 mt-8 space-y-4">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-lg font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
