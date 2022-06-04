import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showNotification } from "@mantine/notifications";

interface Props {
	name?: string;
	title: string;
	message?: string;
	closeDuration?: number;
}

export const showError = ({ name, title, message, closeDuration }: Props) => {
	showNotification({
		id: name,
		autoClose: closeDuration ?? 5000,
		title: title,
		message: message ?? "",
		color: "red",
		icon: <FontAwesomeIcon icon={faClose} />,
	});
};
