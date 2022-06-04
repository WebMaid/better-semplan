import { RequestHandler } from "express";
import { getConnection } from "typeorm";

export const databaseHealthEndpoint: RequestHandler = async (_, res) => {
	const connection = getConnection();

	if (!connection?.isConnected) {
		return res
			.json({
				ok: false,
			})
			.send();
	}

	return res
		.json({
			ok: true,
			connection: {
				name: connection.name,
				database: {
					type: connection.options.type,
					database: connection.options.database,
					tableCount: connection.entityMetadatas.length,
				},
			},
		})
		.send();
};
