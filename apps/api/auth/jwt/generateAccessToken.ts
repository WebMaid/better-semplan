import { accessTokenExpiresIn } from "../../constants";
import { User } from "../../entities/User";
import { signData } from "./sign";

export const generateAccessToken = async ({ id, jwtSecret }: User) => {
	return await signData(
		{ id, type: "access-token" },
		{ expiresIn: accessTokenExpiresIn },
		jwtSecret
	);
};
