import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './locales/en/translation.json';
import Russian from './locales/ru/translation.json';
import { getLocalStorageItem } from '../service/StorageService';

export const resources = {
	en: {
		translation: English,
	},
	ru: { translation: Russian },
} as const;

const lng = getLocalStorageItem('language') ? getLocalStorageItem('language') : 'en';

i18n.use(initReactI18next).init({
	lng: lng ? lng : 'en',
	fallbackLng: 'en',
	nsSeparator: false,
	keySeparator: false,
	ns: ['English', 'Russian'],
	interpolation: { escapeValue: false },
	resources,
});

export default i18n;
