import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { Group } from "@mantine/core";
import { UIPasswordInput, UIPrimaryButton, UITextInput } from "@template/ui";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IndexProps } from ".";
import { LoginFields } from "./types";

interface Props extends IndexProps {
	submit: (data: LoginFields) => void;
}

export const UserLoginPageComponent = ({ submit }: Props) => {
	const { handleSubmit } = useFormContext<LoginFields>();
	const { t } = useTranslation("main");

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<UITextInput<LoginFields>
					name='mail'
					label={t("user.mail.label")}
					placeholder={t("user.mail.placeholder")}
					leftSection={faAt}
					required
				/>
				<UIPasswordInput<LoginFields>
					name='password'
					label={t("user.password.label")}
					required
					leftSection={faLock}
				/>
				<Group
					style={{
						marginTop: "8px",
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<UIPrimaryButton type='submit'>
						{t("user.action.login")}
					</UIPrimaryButton>
				</Group>
			</form>
		</div>
	);
};
