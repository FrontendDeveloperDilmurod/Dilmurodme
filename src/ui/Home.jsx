import { useTranslation } from "react-i18next";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-center my-10 sm:mt-16">
      <h1 className="font-sans text-center text-2xl text-stone-700 font-semibold ">
        {t("hero.titleBlack")}
        <br />
        <span className="text-yellow-500">
          {t("hero.titleYellow")}
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
