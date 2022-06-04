import { RedisDbsType } from "./types";

export const redisPort: number = 6379;
export const redisHost: string = "127.0.0.1";
export const redisUsername: string | null = null;
export const redisPassword: string | null = null;
export const redisPrefix: string = "tmpl";

export const redisDbs: RedisDbsType = {
	default: 0,
};
