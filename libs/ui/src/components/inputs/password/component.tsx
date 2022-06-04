import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PasswordInput } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { IndexProps } from ".";

interface Props<FieldType> extends IndexProps<FieldType> {
	error?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
}

export function UIPasswordInputComponent<FieldType>({
	name,
	leftSection,
	autoComplete = "off",
	...props
}: Props<FieldType>) {
	const { register } = useFormContext<FieldType>();
	return (
		<PasswordInput
			{...register(name)}
			icon={leftSection}
			{...props}
			autoComplete={autoComplete}
			visibilityToggleIcon={({ reveal }) =>
				reveal ? (
					<FontAwesomeIcon icon={faEyeSlash} />
				) : (
					<FontAwesomeIcon icon={faEye} />
				)
			}
		/>
	);
}
