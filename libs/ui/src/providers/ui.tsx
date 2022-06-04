import {
	ColorScheme,
	ColorSchemeProvider,
	Global,
	MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import { SpotlightAction } from "@mantine/spotlight";
import { ReactNode } from "react";
import { UISpotlightProvider } from "../components";

interface Props {
	children: ReactNode;
	spotlightActions: SpotlightAction[];
}

export const UIProvider = ({ children, spotlightActions }: Props) => {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: "color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{
					colorScheme,
				}}
			>
				<Global
					styles={(theme) => ({
						body: {
							color:
								theme.colorScheme === "dark"
									? theme.colors.dark[0]
									: theme.black,
						},
					})}
				/>
				<UISpotlightProvider actions={spotlightActions}>
					<NotificationsProvider>{children}</NotificationsProvider>
				</UISpotlightProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	);
};
