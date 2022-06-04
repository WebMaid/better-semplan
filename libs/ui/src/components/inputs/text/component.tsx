import { TextInput } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { IndexProps } from ".";

interface Props<FieldType> extends IndexProps<FieldType> {
	error?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
}

export function UITextInputComponent<FieldType>({
	name,
	leftSection,
	autoComplete = "off",
	...props
}: Props<FieldType>) {
	const { register } = useFormContext<FieldType>();

	return (
		<TextInput
			{...register(name)}
			icon={leftSection}
			{...props}
			autoComplete={autoComplete}
		/>
	);
}
