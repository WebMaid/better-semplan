import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Badge,
	Group,
	UnstyledButton,
	Text,
	useMantineTheme,
} from "@mantine/core";
import { openSpotlight } from "@mantine/spotlight";
import { useTranslation } from "react-i18next";
import { IndexProps } from ".";

interface Props extends IndexProps {}

export const UISearchButtonComponent = ({}: Props) => {
	const theme = useMantineTheme();
	const { t } = useTranslation("main");

	return (
		<UnstyledButton
			onClick={openSpotlight}
			style={{
				display: "flex",
				alignItems: "center",
				backgroundColor:
					theme.colorScheme === "dark"
						? theme.colors.dark[5]
						: "white",
				border:
					theme.colorScheme === "light"
						? `1px solid rgba(73, 80, 87, 0.75)`
						: "1px solid transparent",
				height: "34px",
				borderRadius: "8px",
				padding: "0px 5px 0px 12px",
				fontSize: "16px",
				color: "rgb(144, 146, 150)",
				width: "256px",
			}}
		>
			<Group
				style={{
					width: "100%",
				}}
			>
				<FontAwesomeIcon
					icon={faSearch}
					style={{
						fontSize: "12px",
					}}
				/>
				<Text
					style={{
						fontSize: "14px",
						marginRight: "auto",
					}}
				>
					{t("search.title")}
				</Text>
				<Badge
					color={theme.colorScheme === "dark" ? "dark" : "gray"}
					size='md'
					radius='sm'
					style={{
						textTransform: "none",
						padding: "4px 7px",
						userSelect: "none",
						cursor: "pointer",
						border:
							theme.colorScheme === "light"
								? `1px solid rgba(73, 80, 87, 0.1)`
								: "1px solid rgba(255, 255, 255, 0.1)",
					}}
				>
					Ctrl + K
				</Badge>
			</Group>
		</UnstyledButton>
	);
};
