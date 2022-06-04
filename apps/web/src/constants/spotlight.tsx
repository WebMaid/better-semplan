import { SpotlightAction } from "@mantine/spotlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";

export const spotlightActions: SpotlightAction[] = [
	{
		title: "Item One",
		description: "Get to item one",
		onTrigger: () => console.log("Item one"),
		icon: <FontAwesomeIcon icon={fa1} />,
	},
];
