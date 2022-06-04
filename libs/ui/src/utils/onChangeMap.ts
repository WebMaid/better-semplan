import {
	FieldPath,
	Path,
	PathValue,
	UnpackNestedValue,
	UseFormSetValue,
} from "react-hook-form";

export function onChangeMap<FieldType>(
	name: FieldPath<FieldType>,
	setValue: UseFormSetValue<FieldType>
) {
	return (v: string) =>
		setValue(
			name,
			v as UnpackNestedValue<PathValue<FieldType, Path<FieldType>>>,
			{
				shouldValidate: true,
				shouldTouch: true,
			}
		);
}
