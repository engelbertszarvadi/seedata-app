import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./locales/en/common.json";
import common_ro from "./locales/ro/common.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: common_en,
    },
    ro: {
      translation: common_ro,
    },
  },
});

export default i18next;
