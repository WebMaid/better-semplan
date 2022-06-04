import {
	AuthContext,
	getClientId,
	useLoginUserMutation,
} from "@template/client";
import { showError, showSuccess } from "@template/ui";
import { useNavigate } from "@template/ui/router";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UserLoginPageComponent } from "./component";
import { LoginFields } from "./types";

export interface IndexProps {}

export const UserLoginPage = (indexProps: IndexProps) => {
	const formMethods = useForm<LoginFields>();
	const [login] = useLoginUserMutation();
	const { refetchCurrentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	const { t } = useTranslation("main");
	const submit = async (data: LoginFields) => {
		try {
			await login({
				variables: {
					...data,
					clientId: getClientId(),
				},
			});
			await refetchCurrentUser();
			showSuccess({
				name: "login_success",
				title: t("user.notification.login.success.title"),
				message: t("user.notification.login.success.message"),
			});
			navigate("/home", {
				replace: true,
			});
		} catch (err) {
			showError({
				name: "login_failure",
				title: t("user.notification.login.failure.title"),
				message: t("user.notification.login.failure.message"),
			});
		}
	};

	return (
		<FormProvider {...formMethods}>
			<UserLoginPageComponent submit={submit} {...indexProps} />
		</FormProvider>
	);
};
