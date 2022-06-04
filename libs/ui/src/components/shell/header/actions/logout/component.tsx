import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IndexProps } from ".";

interface Props extends IndexProps {
	logout: () => Promise<void>;
}

export const UILogoutButtonComponent = ({ logout }: Props) => {
	const { colorScheme } = useMantineColorScheme();
	const { t } = useTranslation("main");

	return (
		<Button
			color='gray'
			variant={colorScheme === "dark" ? "default" : "outline"}
			rightIcon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
			onClick={logout}
		>
			{t("user.action.logout")}
		</Button>
	);
};
