import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locals/en/en.json';
import hiTranslation from '../locals/hi/hi.json';
import frTranslation from '../locals/fr/fr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation,
            },
            hi: {
                translation: hiTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
