import { Aside, MediaQuery, Text } from "@mantine/core";
import { IndexProps } from ".";

interface Props extends IndexProps {}

export const UISidebarComponent = ({}: Props) => {
	return (
		<MediaQuery smallerThan='sm' styles={{ display: "none" }}>
			<Aside p='md' hiddenBreakpoint='sm' width={{ sm: 200, lg: 300 }}>
				<Text>Application sidebar</Text>
			</Aside>
		</MediaQuery>
	);
};
