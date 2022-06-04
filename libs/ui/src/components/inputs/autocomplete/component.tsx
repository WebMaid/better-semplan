import { Autocomplete } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { IndexProps } from ".";
import { onChangeMap } from "../../../utils/onChangeMap";

interface Props<FieldType> extends IndexProps<FieldType> {
	error?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
}

export function UIAutocompleteInputComponent<FieldType>({
	name,
	leftSection,
	autoComplete = "off",
	...props
}: Props<FieldType>) {
	const { register, setValue } = useFormContext<FieldType>();

	return (
		<Autocomplete
			{...register(name)}
			onChange={onChangeMap<FieldType>(name, setValue)}
			icon={leftSection}
			{...props}
			autoComplete={autoComplete}
		/>
	);
}
