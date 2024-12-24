import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <nav className="py-4 px-3 bg-yellow-500 text-xl  font-sans flex flex-row items-center justify-between sm:text-xl border-b border-stone-400">
      <p className="tracking-widest uppercase font-pizza">Fast Pizza</p>
      <SearchOrder />
      <UserName />
    </nav>
  );
}
