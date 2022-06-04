import { refreshTokenCookieKey } from "@template/core";
import { Response } from "express";
import { User } from "../../entities/User";
import { generateRefreshToken } from "./generateRefreshToken";

export const sendRefreshToken = async (res: Response, user: User) => {
	res.cookie(refreshTokenCookieKey, await generateRefreshToken(user), {
		httpOnly: true,
	});
};
