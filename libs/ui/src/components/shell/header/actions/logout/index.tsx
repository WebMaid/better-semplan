import {
	AuthContext,
	getClientId,
	setAccessToken,
	useLogoutUserMutation,
} from "@template/client";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { showError, showSuccess } from "../../../../..";
import { UILogoutButtonComponent } from "./component";

export interface IndexProps {}

export const UILogoutButton = (indexProps: IndexProps) => {
	const { refetchCurrentUser } = useContext(AuthContext);
	const [logoutMutationFn] = useLogoutUserMutation();
	const { t } = useTranslation("main");

	const logout = async () => {
		try {
			await logoutMutationFn({
				variables: {
					clientId: getClientId(),
				},
			});
			setAccessToken("");
			await refetchCurrentUser();
			showSuccess({
				name: "logout_success",
				title: t("user.notification.logout.success.title"),
				message: t("user.notification.logout.success.message"),
			});
		} catch (err) {
			showError({
				name: "logout_failure",
				title: t("user.notification.logout.failure.title"),
				message: t("user.notification.logout.failure.message"),
			});
		}
	};

	return <UILogoutButtonComponent logout={logout} {...indexProps} />;
};
