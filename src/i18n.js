import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './translations/en.json';
import RU from './translations/ru.json';

i18n.use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: EN
        },
        ru: {
          translation: RU
        }
      },
      fallbackLng: 'en',
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage',
                'navigator', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage', 'cookie'],
      }
    });

export default i18n;
