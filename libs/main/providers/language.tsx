import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

interface ILanguageContext {
	language: string;
	setLanguage: (language: string) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
	language: "de",
	setLanguage: () => {},
});

interface ProviderProps {
	children: JSX.Element | string;
}

export const LanguageProvider = ({ children }: ProviderProps) => {
	const [language, setLocalLanguage] = useLocalStorage({
		key: "language",
		defaultValue: "de",
	});
	const {
		i18n: { changeLanguage },
	} = useTranslation();

	const setLanguage = (language: string) => {
		changeLanguage(language);
		setLocalLanguage(language);
	};

	useEffect(() => {
		changeLanguage(language);
	}, []);

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
};
