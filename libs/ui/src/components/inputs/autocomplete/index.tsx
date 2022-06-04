import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AutocompleteItem } from "@mantine/core";
import { FieldPath } from "react-hook-form";
import { convertIconDefinitionToElementIfNecessary } from "../../../utils/convertIconDefinitionToElementIfNecessary";
import { UIAutocompleteInputComponent } from "./component";

export interface IndexProps<FieldType> {
	name: FieldPath<FieldType>;
	label: string;
	data: (string | AutocompleteItem)[];
	limit?: number;
	nothingFound?: string;
	placeholder?: string;
	description?: string;
	autoComplete?: string;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	multiline?: boolean;
	leftSection?: IconDefinition | JSX.Element;
	rightSection?: IconDefinition | JSX.Element;
	validation?: null; //AutocomleteValidation
}

export function UIAutocompleteInput<FieldType>({
	leftSection,
	rightSection,
	...indexProps
}: IndexProps<FieldType>) {
	return (
		<UIAutocompleteInputComponent<FieldType>
			{...indexProps}
			leftSection={convertIconDefinitionToElementIfNecessary(leftSection)}
			rightSection={convertIconDefinitionToElementIfNecessary(
				rightSection
			)}
		/>
	);
}
