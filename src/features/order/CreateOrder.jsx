import { useState } from "react";
import { createOrder } from "../../utils/apiRestaurant";
import { Form, redirect } from "react-router-dom";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  // const cart = fakeCart;
  const { t, i18n } = useTranslation();
  return (
    <div className="font-sans">
      <h2 className="text-lg font-semibold mb-8">
        {t("careateOrder.title")}
      </h2>

      <Form method="POST">
        <div className="flex items-center justify-between py-2">
          <label className="w-36 inline-block">{t("careateOrder.name")}</label>
          <input
            type="text"
            name="customer"
            className="input flex-grow"
            required
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="w-36 inline-block">{t("careateOrder.number")}</label>
          <div className="flex-grow">
            <input type="tel" name="phone" className="input w-full" required />
          </div>
        </div>

        <div className="flex items-center justify-between py-2">
          <label className="w-36 inline-block">{t("careateOrder.addres")}</label>
          <div className="flex-grow">
            <input
              type="text"
              name="address"
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="size-6 outline-none focus:outline-none accent-yellow-400 focus:ring focus:ring-yellow-400 ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-sm">
           {t("careateOrder.text")}
          </label>
        </div>

        <div className="mt-8">
          <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
          <Button>{t("careateOrder.button")}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ _, request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newOrder = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };
  const orderResponse = await createOrder(newOrder);
  return redirect(`/order/${orderResponse.id}`);
}

export default CreateOrder;
