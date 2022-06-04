import { refreshTokenCookieKey } from "@template/core";
import { Response } from "express";

export const resetRefreshToken = (res: Response) => {
	res.cookie(refreshTokenCookieKey, null, {
		httpOnly: true,
		expires: new Date(0),
	});
};
