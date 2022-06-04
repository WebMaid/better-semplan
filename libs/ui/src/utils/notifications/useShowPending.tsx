import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showNotification, updateNotification } from "@mantine/notifications";

export type UseShowPendingProps = {
	name: string;
	error: {
		title: string;
		message: string;
	};
	success: {
		title: string;
		message: string;
	};
	pending: {
		title: string;
		message: string;
	};
};

export type UseShowPendingReturnProps = {
	start: () => void;
	stop: (successfully: boolean) => void;
};

export const useShowPending = ({
	name,
	error,
	success,
	pending,
}: UseShowPendingProps) => {
	const start = () => {
		showNotification({
			id: name,
			...pending,
			loading: true,
			autoClose: false,
		});
	};

	const stop = (successfully: boolean) => {
		if (successfully) {
			return updateNotification({
				id: name,
				...success,
				loading: false,
				autoClose: 1500,
				color: "teal",
				icon: <FontAwesomeIcon icon={faCheck} />,
			});
		}
		updateNotification({
			id: name,
			...error,
			loading: false,
			autoClose: 1500,
			color: "red",
			icon: <FontAwesomeIcon icon={faClose} />,
		});
	};

	return { start, stop };
};
