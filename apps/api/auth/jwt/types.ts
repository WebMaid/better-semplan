import { IdType } from "../../types/definitions";

export type JwtType = "access-token" | "refresh-token"; // | "api"

interface ITokenData {
	id: IdType;
	type: JwtType;
}

export interface AccessTokenData extends ITokenData {}
export interface RefreshTokenData extends ITokenData {
	version: number;
}

export type TokenData = AccessTokenData | RefreshTokenData;
