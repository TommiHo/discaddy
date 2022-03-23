import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationFI from "./locales/fi/translations.json"
import translationEN from "./locales/en/translations.json"
import detector from "i18next-browser-languagedetector"
i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      fi: {
        translation: translationFI
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
