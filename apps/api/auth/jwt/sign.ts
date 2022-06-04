import { sign, SignOptions } from "jsonwebtoken";
import { generateHashedSecret } from "./generateHashedSecret";
import { JwtType, TokenData } from "./types";

export const signData = async (
	data: TokenData,
	options: SignOptions = {},
	jwtSecret: string,
	type: JwtType = "access-token"
) => {
	if (!jwtSecret) return undefined;

	options.algorithm = "HS512";
	data.type = type;

	return sign(data, generateHashedSecret(jwtSecret, type), options);
};
