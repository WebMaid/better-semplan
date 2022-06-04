import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpotlightAction, SpotlightProvider } from "@mantine/spotlight";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface Props {
	actions: SpotlightAction[];
	children: ReactNode;
}

export const UISpotlightProvider = ({ actions, children }: Props) => {
	const { t } = useTranslation("main");

	return (
		<SpotlightProvider
			actions={actions}
			searchIcon={<FontAwesomeIcon icon={faSearch} />}
			searchPlaceholder={t("spotlight.search")}
			shortcut={["mod + k", "/", "shift + /"]}
			nothingFoundMessage={t("spotlight.none")}
			filter={(query, actions) =>
				actions.filter(
					(action) =>
						action.title
							.toLowerCase()
							.includes(query.toLowerCase().trim()) ||
						action.description
							?.toLowerCase()
							.includes(query.toLowerCase().trim())
				)
			}
		>
			{children}
		</SpotlightProvider>
	);
};
