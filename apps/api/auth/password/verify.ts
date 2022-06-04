import { hashPassword } from "./hash";

export const verifyPassword = (
	to_check: string,
	hashedFromDb: string
): boolean => {
	return hashPassword(to_check) == hashedFromDb;
};
