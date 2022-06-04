import {
	redisDbs,
	RedisDbsKey,
	redisHost,
	redisPassword,
	redisPort,
	redisUsername,
} from "@template/server";
import Redis from "ioredis";
import { SearchOptions } from "./types";

export abstract class RedisClient {
	private static clientInstances: Map<string, Redis> = new Map<string, Redis>(
		[]
	);

	static MAX_SEARCH_RESULTS = 1000;

	public static instance(db: RedisDbsKey) {
		if (!this.clientInstances.get(db)) {
			this.clientInstances.set(db, this.createClient(db));
		}
		return this.clientInstances.get(db);
	}

	public static async search(
		client: Redis,
		key: string,
		{ limit, query = "*", sort }: SearchOptions = {} as SearchOptions
	) {
		try {
			// Return the first MAX_SEARCH_RESULTS matching documents.
			let searchResults = [];
			if (sort) {
				searchResults = (await client.call(
					"FT.SEARCH",
					key,
					query,
					"SORTBY",
					sort.column,
					sort.direction ?? "ASC",
					"LIMIT",
					"0",
					limit ?? this.MAX_SEARCH_RESULTS
				)) as any[];
			} else {
				searchResults = (await client.call(
					"FT.SEARCH",
					key,
					query,
					"LIMIT",
					"0",
					limit ?? this.MAX_SEARCH_RESULTS
				)) as any[];
			}

			// An empty search result looks like [ 0 ].
			if (searchResults.length === 1) {
				return [];
			}

			// Actual results look like:
			//
			// [ 3, 'hashKey', ['fieldName', 'fieldValue', ...],
			//      'hashKey', ['fieldName, 'fieldValue', ...], ... ]

			const results = [];
			for (let n = 2; n < searchResults.length; n += 2) {
				const result = {};
				const fieldNamesAndValues = searchResults[n];

				for (let m = 0; m < fieldNamesAndValues.length; m += 2) {
					const k = fieldNamesAndValues[m];
					const v = fieldNamesAndValues[m + 1];
					result[k] = v;
				}

				results.push(result);
			}

			return results;
		} catch (e) {
			// A malformed query or unknown index etc causes an exception type error.
			console.error(e);
			return [];
		}
	}

	private static createClient(db: RedisDbsKey) {
		return new Redis({
			port: redisPort,
			host: redisHost,
			username: redisUsername,
			password: redisPassword,
			db: redisDbs[db],
		});
	}
}
