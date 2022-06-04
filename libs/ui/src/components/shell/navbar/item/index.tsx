import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MantineColor } from "@mantine/core";
import { UINavbarLinkComponent } from "./component";

export interface IndexProps {
	color: MantineColor;
	icon: IconDefinition;
	label: string;
	to: string;
}

export const UINavbarLink = (indexProps: IndexProps) => {
	return <UINavbarLinkComponent {...indexProps} />;
};
