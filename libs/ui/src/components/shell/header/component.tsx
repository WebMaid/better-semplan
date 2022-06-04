import {
	Burger,
	Group,
	Header,
	MediaQuery,
	useMantineTheme,
} from "@mantine/core";
import { IndexProps } from ".";
import { UIHeaderActions } from "./actions";
import { UIHeaderFront } from "./front";

interface Props extends IndexProps {}

export const UIHeaderComponent = ({ navOpened, setNavOpened }: Props) => {
	const theme = useMantineTheme();

	return (
		<Header height={70} p='md'>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					height: "100%",
				}}
			>
				<MediaQuery largerThan='sm' styles={{ display: "none" }}>
					<Burger
						opened={navOpened}
						onClick={() => setNavOpened((o) => !o)}
						size='sm'
						color={theme.colors.gray[6]}
						mr='xl'
					/>
				</MediaQuery>

				<UIHeaderFront />
				<UIHeaderActions />
			</div>
		</Header>
	);
};
