import { TokenRefreshLink } from "apollo-link-token-refresh";
import { getAccessToken, setAccessToken } from "..";
import {
	refreshTokenUrl,
	refreshTokenMethod,
	accessTokenField,
	refreshTokenExpireWarning,
} from "@template/core";
import { jwtDecode } from "../../../utils";

export const tokenRefreshLink: any = new TokenRefreshLink({
	accessTokenField,
	isTokenValidOrUndefined: () => {
		const token = getAccessToken();
		if (token === "") return false;
		try {
			const { exp }: any = jwtDecode(token);
			return Date.now() < exp * 1000;
		} catch (err) {
			return false;
		}
	},
	fetchAccessToken: async () => {
		return await fetch(refreshTokenUrl, {
			method: refreshTokenMethod,
			credentials: "include",
		});
	},
	handleFetch: (accessToken) => {
		setAccessToken(accessToken);
	},
	handleError: (err) => {
		if (getAccessToken() === "" || !getAccessToken()) return;
		console.warn(refreshTokenExpireWarning);
		console.error(err);
	},
});
