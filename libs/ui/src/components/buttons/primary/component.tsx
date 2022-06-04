import { Button } from "@mantine/core";
import { IndexProps } from ".";
import { primaryColor } from "../../../constants/color";

export const UIPrimaryButtonComponent = ({ ...props }: IndexProps) => {
	return <Button color={primaryColor} {...props}></Button>;
};
