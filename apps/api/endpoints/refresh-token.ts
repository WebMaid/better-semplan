import { refreshTokenCookieKey } from "@better-semplan/core";
import { RequestHandler } from "express";
import { generateAccessToken, sendRefreshToken, verifyJwt } from "../auth";
import { User } from "../entities/User";

const nOkResponse = { ok: false, accessToken: "" };

export const refreshTokenEndpoint: RequestHandler = async (
	{ cookies },
	res
) => {
	const refreshToken = cookies[refreshTokenCookieKey];
	if (!refreshToken) return res.send(nOkResponse);

	let payload: any = null;
	try {
		payload = await verifyJwt(refreshToken);
	} catch {
		return res.send(nOkResponse);
	}

	const user = await User.findOne({
		where: {
			id: payload.id,
		},
		select: ["id", "jwtVersion", "jwtSecret"],
	});

	if (!user || user.jwtVersion != payload.version) {
		return res.send(nOkResponse);
	}

	await sendRefreshToken(res, user);
	return res.send({ ok: true, accessToken: await generateAccessToken(user) });
};
