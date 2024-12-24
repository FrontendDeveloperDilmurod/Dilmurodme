import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview";

export default function AppLayout() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div className="layout h-screen grid grid-rows-[auto_1fr_auto]">
      {navigation.state === "loading" && <Loader />}

      <Header />
      <div className="overflow-y-auto">
        <div className="mx-auto max-w-3xl px-3">
          <Outlet />
        </div>
      </div>
      <CartOverview />
    </div>
  );
}
