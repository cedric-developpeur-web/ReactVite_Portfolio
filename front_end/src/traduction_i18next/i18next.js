import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tradFr from '../traductor/fr.json';
import tradEn from '../traductor/en.json';


i18n

  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: tradFr,
      },
      en: {
        translation: tradEn,
      },
    },
    lng: 'fr',
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;