import { DefaultRedisEntityKeys } from "./entities/types";

export type RedisDbsType = {
	[key in RedisDbsKey]: number;
};

export type RedisDbsKey = "default";

export type RedisEntityKey = DefaultRedisEntityKeys;
