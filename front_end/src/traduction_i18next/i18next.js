import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import file french
import dataFr from '../traductor/fr.json';
// import file english
import dataEn from '../traductor/en.json';


i18n

  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: dataFr,
      },
      en: {
        translation: dataEn,
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