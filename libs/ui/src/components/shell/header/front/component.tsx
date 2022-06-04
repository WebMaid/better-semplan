import { Group } from "@mantine/core";
import { IndexProps } from ".";
import { UIHeaderLogo } from "./logo";

interface Props extends IndexProps {}

export const UIHeaderFrontComponent = ({}: Props) => {
	return (
		<Group>
			<UIHeaderLogo />
		</Group>
	);
};
