import { refreshTokenExpiresIn } from "../../constants";
import { User } from "../../entities/User";
import { signData } from "./sign";

export const generateRefreshToken = async ({
	id,
	jwtVersion,
	jwtSecret,
}: User) => {
	return await signData(
		{ id, version: jwtVersion, type: "refresh-token" },
		{ expiresIn: refreshTokenExpiresIn },
		jwtSecret,
		"refresh-token"
	);
};
