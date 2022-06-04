import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ButtonVariant } from "@mantine/core";
import { MouseEventHandler, ReactNode } from "react";
import { UIPrimaryButtonComponent } from "./component";

export interface IndexProps {
	children: ReactNode;
	onClick?: MouseEventHandler;
	compact?: boolean;
	disabled?: boolean;
	fullWidth?: boolean;
	leftSection?: IconDefinition | JSX.Element;
	rightSection?: IconDefinition | JSX.Element;
	loading?: boolean;
	type?: "button" | "reset" | "submit";
	variant?: ButtonVariant;
}

export const UIPrimaryButton = ({ ...indexProps }: IndexProps) => {
	return <UIPrimaryButtonComponent {...indexProps} />;
};
