import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IndexProps } from ".";

interface Props extends IndexProps {}

export const UIToggleThemeComponent = ({}: Props) => {
	const { toggleColorScheme, colorScheme } = useMantineColorScheme();

	return (
		<ActionIcon
			size='lg'
			color='gray'
			variant={colorScheme === "dark" ? "default" : "outline"}
			onClick={() => toggleColorScheme()}
		>
			<FontAwesomeIcon icon={colorScheme === "dark" ? faSun : faMoon} />
		</ActionIcon>
	);
};
