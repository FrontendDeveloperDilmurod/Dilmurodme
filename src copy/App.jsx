import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";
import Order from "./features/order/Order";
import CreateOrder, {
  action as orderAction,
} from "./features/order/CreateOrder";
import { useTranslation } from "react-i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: "order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

export default function App() {
  const {t} = useTranslation();
  return<>
   <h1>{t("Welcome")}</h1>
   <RouterProvider router={router} />;

  
  </>
}
