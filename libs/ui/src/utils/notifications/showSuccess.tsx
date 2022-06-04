import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showNotification } from "@mantine/notifications";

interface Props {
	name?: string;
	title: string;
	message?: string;
	closeDuration?: number;
}

export const showSuccess = ({ name, title, message, closeDuration }: Props) => {
	showNotification({
		id: name,
		autoClose: closeDuration ?? 5000,
		title: title,
		message: message ?? "",
		color: "teal",
		icon: <FontAwesomeIcon icon={faCheck} />,
	});
};
