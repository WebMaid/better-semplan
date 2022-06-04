import cookieParser from "cookie-parser";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer as createHttpServer } from "http";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import "dotenv/config";
import "reflect-metadata";
import { serverPort } from "@better-semplan/core";
import { addEndpoints } from "./endpoints";
import { resolvers } from "./resolvers";
import { corsSettings } from "./utils/corsSettings";
import { addMockData } from "./data/addMockData";
import { addInitialData } from "./data/addInitialData";
import { ormConfig } from "./ormconfig";
import { usePubSub } from "./subscriptions/pubSub";
import { useSubscriptionServer } from "./subscriptions/server";
import { initializeClientId } from "./db/clientId";

(async () => {
	const app = express();
	app.use(corsSettings());
	app.use(cookieParser());
	app.use(express.json());

	addEndpoints(app);

	await createConnection(ormConfig);
	const httpServer = createHttpServer(app);

	const schema = await buildSchema({
		resolvers: resolvers,
		pubSub: usePubSub(),
	});

	const subscriptionServer = useSubscriptionServer(schema, httpServer);

	const apolloServer = new ApolloServer({
		schema,
		debug: false,
		context: ({ req, res }) => ({ req, res }),
		plugins: [
			{
				async serverWillStart() {
					return {
						async drainServer() {
							subscriptionServer.close();
						},
					};
				},
			},
		],
	});

	await initializeClientId();

	await apolloServer.start();
	apolloServer.applyMiddleware({ app, cors: false });

	httpServer.listen(serverPort, async () => {
		console.log("STARTED SERVER SUCCESSFULLY!");
		addInitialData();
		addMockData();
	});
})();
