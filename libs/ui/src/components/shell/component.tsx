import {
	AppShell,
	Aside,
	Footer,
	MediaQuery,
	Text,
	useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { IndexProps } from ".";
import { UIFooter } from "./footer";
import { UIHeader } from "./header";
import { UINavbar } from "./navbar";
import { UISidebar } from "./sidebar";

interface Props extends IndexProps {}

export const UIAppShellComponent = ({ children, navbarItems }: Props) => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === "dark"
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
			fixed
			navbar={<UINavbar opened={opened} items={navbarItems} />}
			aside={<UISidebar />}
			footer={<UIFooter />}
			header={<UIHeader navOpened={opened} setNavOpened={setOpened} />}
		>
			{children}
		</AppShell>
	);
};
