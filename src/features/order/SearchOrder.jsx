import { useTranslation } from "react-i18next";

export default function SearchOrder() {
  const { t, i18n } = useTranslation();
  return (
    <input
      type="text"
      className="outline-none rounded-full px-3 py-1 bg-white/50 border border-slate-200 border-2 transition-all duration-300 
      focus:pr-5 placeholder:text-slate-600 "
      placeholder={t("navbar.inputPlaceholder")}
    />
  );
}
