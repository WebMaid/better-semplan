import { createHmac } from "crypto";
import { passwordHashAlgorithm } from "../../constants";

export const hashPassword = (password: string): string => {
	return password
		? createHmac(passwordHashAlgorithm, process.env.PASSWORD_HASH_KEY)
				.update(password)
				.digest("base64")
		: null;
};
