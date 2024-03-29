import { NonEmptyArray } from "type-graphql";
import { ClientIdResolver } from "./clientId/queries";
import { userResolvers } from "./user";

export const resolvers: NonEmptyArray<Function> = [
	...userResolvers,
	ClientIdResolver,
];
