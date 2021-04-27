import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    "en-US": {
        translation: {
            "title": "Welcome to internationalization using i18next"
        }
    },
    "si-LK": {
        translation: {
            "title": "I18next භාවිතා කරමින් ජාත්‍යන්තරකරණයට සාදරයෙන් පිළිගනිමු"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en-US",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;