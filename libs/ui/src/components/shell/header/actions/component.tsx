import { Group } from "@mantine/core";
import { AuthContext } from "@better-semplan/client";
import { useContext } from "react";
import { IndexProps } from ".";
import { LanguageSelection } from "./language";
import { UILoginButton } from "./login";
import { UILogoutButton } from "./logout";
import { UISearchButton } from "./search";
import { UIToggleTheme } from "./theme";

interface Props extends IndexProps {}

export const UIHeaderActionsComponent = ({}: Props) => {
	const { currentUser } = useContext(AuthContext);

	return (
		<Group
			style={{
				display: "flex",
				gap: "8px",
			}}
		>
			<UISearchButton />
			<UIToggleTheme />
			<LanguageSelection />
			{!currentUser ? <UILoginButton /> : <UILogoutButton />}
		</Group>
	);
};
