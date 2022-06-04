import { createHmac } from "crypto";
import { JwtType } from "./types";

export const generateHashedSecret = (jwtSecret: string, type: JwtType) => {
	return createHmac("sha512", getEnvSecret(type))
		.update(jwtSecret)
		.digest("base64");
};

const getEnvSecret = (type: JwtType) => {
	switch (type) {
		case "access-token":
			return process.env.ACCESS_TOKEN_SECRET;
		case "refresh-token":
			return process.env.REFRESH_TOKEN_SECRET;
	}
};
