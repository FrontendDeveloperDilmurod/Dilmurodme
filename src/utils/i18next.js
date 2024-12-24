import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

import textEn from "../locale/en/english.json";
import textRu from "../locale/ru/russian.json";
import textUz from "../locale/uz/uzbek.json";
///midle vere
i18n
  //  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: textEn,
      ru: textRu,
      uz: textUz,
    },
  });

export default i18n;