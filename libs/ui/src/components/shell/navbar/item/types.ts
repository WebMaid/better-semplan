import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MantineColor } from "@mantine/core";

export type UINavbarLinkType = {
	icon: IconDefinition;
	color: MantineColor;
	label: string;
	to: string;
};
