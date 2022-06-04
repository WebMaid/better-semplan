import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FieldPath } from "react-hook-form";
import { convertIconDefinitionToElementIfNecessary } from "../../../utils/convertIconDefinitionToElementIfNecessary";
import { UITextInputComponent } from "./component";

export interface IndexProps<FieldType> {
	name: FieldPath<FieldType>;
	label: string;
	placeholder?: string;
	description?: string;
	autoComplete?: string;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	multiline?: boolean;
	leftSection?: IconDefinition | JSX.Element;
	rightSection?: IconDefinition | JSX.Element;
	validation?: null; //TextValidation
}

export function UITextInput<FieldType>({
	leftSection,
	rightSection,
	...indexProps
}: IndexProps<FieldType>) {
	return (
		<UITextInputComponent<FieldType>
			{...indexProps}
			leftSection={convertIconDefinitionToElementIfNecessary(leftSection)}
			rightSection={convertIconDefinitionToElementIfNecessary(
				rightSection
			)}
		/>
	);
}
