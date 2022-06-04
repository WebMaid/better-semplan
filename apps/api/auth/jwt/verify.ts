import { verify } from "jsonwebtoken";
import { User } from "../../entities/User";
import { generateHashedSecret } from "./generateHashedSecret";
import { TokenData } from "./types";

export const verifyJwt = async (token: string) => {
	if (!token || !token.includes(".")) throw new Error("Invalid Token");

	const body = token.split(".")[1];

	const data: TokenData = JSON.parse(
		Buffer.from(body, "base64").toString("ascii")
	);
	if (!data) throw new Error("Invalid Token");

	const { jwtSecret } = await User.findOne({
		where: {
			id: data.id,
		},
		select: ["jwtSecret"],
	});
	if (!jwtSecret) throw new Error("Invalid Token");

	return verify(token, generateHashedSecret(jwtSecret, data.type));
};
