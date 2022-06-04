import { Footer } from "@mantine/core";
import { IndexProps } from ".";

interface Props extends IndexProps {}

export const UIFooterComponent = ({}: Props) => {
	return (
		<Footer height={60} p='md'>
			Application footer
		</Footer>
	);
};
