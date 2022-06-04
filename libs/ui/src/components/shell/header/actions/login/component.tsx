import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IndexProps } from ".";

interface Props extends IndexProps {}

export const UILoginButtonComponent = ({}: Props) => {
	const { colorScheme } = useMantineColorScheme();
	const { t } = useTranslation("main");
	return (
		<Button
			component={Link}
			to='/login'
			color='gray'
			variant={colorScheme === "dark" ? "default" : "outline"}
			leftIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}
		>
			{t("user.action.login")}
		</Button>
	);
};
