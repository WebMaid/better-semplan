import i18n from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n.use(backend)
	.use(initReactI18next)
	.init({
		lng: "de",
		fallbackLng: "en",
		debug: true,

		backend: {
			loadPath: "http://localhost:3001/lang/{{ns}}/{{lng}}.json",
		},

		ns: ["main"],
		defaultNS: "main",
		keySeparator: ".",
		interpolation: {
			escapeValue: false,
			formatSeparator: ",",
		},

		react: {
			wait: true,
			useSuspense: false,
		},
	});

export default i18n;
