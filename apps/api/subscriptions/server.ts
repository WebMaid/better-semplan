import { execute, GraphQLSchema, subscribe } from "graphql";
import { Server } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
export const useSubscriptionServer = (
	schema: GraphQLSchema,
	httpServer: Server
) => {
	return SubscriptionServer.create(
		{ schema, execute, subscribe },
		{ server: httpServer, path: "/graphql" }
	);
};
