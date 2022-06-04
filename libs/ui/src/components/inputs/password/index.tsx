import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FieldPath } from "react-hook-form";
import { convertIconDefinitionToElementIfNecessary } from "../../../utils/convertIconDefinitionToElementIfNecessary";
import { UIPasswordInputComponent } from "./component";

export interface IndexProps<FieldType> {
	name: FieldPath<FieldType>;
	label: string;
	placeholder?: string;
	description?: string;
	autoComplete?: string;
	disabled?: boolean;
	required?: boolean;
	leftSection?: IconDefinition | JSX.Element;
	rightSection?: IconDefinition | JSX.Element;
	validation?: null; //PasswordValidation
}

export function UIPasswordInput<FieldType>({
	leftSection,
	rightSection,
	...indexProps
}: IndexProps<FieldType>) {
	return (
		<UIPasswordInputComponent
			{...indexProps}
			leftSection={convertIconDefinitionToElementIfNecessary(leftSection)}
			rightSection={convertIconDefinitionToElementIfNecessary(
				rightSection
			)}
		/>
	);
}
