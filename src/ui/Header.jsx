import { useTranslation } from "react-i18next"
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import { Link } from "react-router-dom";
export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <nav className="flex flex-row items-center justify-between px-5 py-4 font-sans text-lg bg-yellow-500 border-b shadow-md border-stone-400">
      <Link
        className="text-2xl tracking-widest uppercase transition-colors font-pizza text-stone-800 hover:text-stone-600"
      >
        {t("navbar.logo")}
      </Link>

      <div className="flex justify-center flex-1">
        <SearchOrder />
      </div>

      <div className="relative">
        <select
          name=""
          id=""
          className="px-3 py-2 bg-yellow-500 border rounded-lg shadow-sm appearance-none border-stone-400 text-stone-800 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option className="bg-white" value="en">
            {t("navbar.selectOptionEng")}
          </option>
          <option className="bg-white" value="ru">
            {t("navbar.selectOptionRu")}
          </option>
          <option className="bg-white" value="uz">
            {t("navbar.selectOptionUz")}
          </option>
        </select>
      </div>

      <div className="ml-4">
        <UserName />
      </div>
    </nav>

  );
}
