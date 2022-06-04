import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Menu, useMantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { LanguageContext, languages } from "@template/main";
import { useContext } from "react";

export const LanguageSelectionComponent = () => {
	const { t } = useTranslation("main");
	const { language, setLanguage } = useContext(LanguageContext);
	const theme = useMantineTheme();
	return (
		<Menu
			control={
				<Button
					color='gray'
					variant={
						theme.colorScheme === "dark" ? "default" : "outline"
					}
					leftIcon={<FontAwesomeIcon icon={faGlobe} />}
				>
					{t(`language.${language}.short`)}
				</Button>
			}
		>
			{languages.map((l) => (
				<Menu.Item
					key={l}
					icon={t(`language.${l}.short`)}
					disabled={l === language}
					onClick={() => setLanguage(l)}
				>
					{t(`language.${l}.name`)}
				</Menu.Item>
			))}
		</Menu>
	);
};
