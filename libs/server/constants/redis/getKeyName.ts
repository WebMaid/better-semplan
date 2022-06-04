import { redisPrefix } from "./definitions";
import { RedisEntityKey } from "./types";

export const getRedisKeyName = (entity: RedisEntityKey, ...args: string[]) => {
	return `${redisPrefix}:${entity}:${args.join(":")}`;
};
