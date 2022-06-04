import { randomBytes } from "crypto";

export const jwtSecretLength = 256;
export const generateJwtSecret = (): string => {
	return randomBytes(999).toString("base64").substring(0, jwtSecretLength);
};
