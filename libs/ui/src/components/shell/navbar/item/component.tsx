import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";
import { Link } from "react-router-dom";
import { IndexProps } from ".";

interface Props extends IndexProps {}

export const UINavbarLinkComponent = ({ color, label, icon, to }: Props) => {
	return (
		<UnstyledButton
			component={Link}
			to={to}
			sx={(theme) => ({
				display: "block",
				width: "calc(100% - 20px)",
				padding: theme.spacing.xs,
				borderRadius: theme.radius.sm,
				color:
					theme.colorScheme === "dark"
						? theme.colors.dark[0]
						: theme.black,

				"&:hover": {
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[6]
							: theme.colors.gray[0],
				},
			})}
		>
			<Group>
				<ThemeIcon color={color} variant='light'>
					<FontAwesomeIcon icon={icon} />
				</ThemeIcon>

				<Text size='sm'>{label}</Text>
			</Group>
		</UnstyledButton>
	);
};
