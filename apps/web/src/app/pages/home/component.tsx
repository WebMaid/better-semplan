import { Button } from "@mantine/core";
import { showSuccess, useShowPending } from "@better-semplan/ui";
import { useLoginUserMutation } from "@better-semplan/client";

export const HomePageComponent = () => {
	const [login] = useLoginUserMutation();
	const loginNotification = useShowPending({
		name: "login",
		pending: {
			title: "Versuche einzuloggen",
			message: "Bitte warten",
		},
		error: {
			title: "Login fehlgeschlagen",
			message: "Beim Login kam es zu Fehlern",
		},
		success: {
			title: "Login erfolgreich",
			message: "Erfolgreich eingeloggt",
		},
	});

	return (
		<div>
			<p> Home Page</p>
			<Button
				onClick={() =>
					showSuccess({
						name: "hello_world",
						title: "Hello",
						message: "World",
					})
				}
			>
				Show notification
			</Button>
			<Button
				onClick={async () => {
					loginNotification.start();
					await login({
						variables: {
							mail: "admin@webmaid.ch",
							password: "admin",
						},
					})
						.then((d) => loginNotification.stop(true))
						.catch((err) => loginNotification.stop(false));
				}}
			>
				Show pending notification
			</Button>
		</div>
	);
};
