import { NonEmptyArray } from "type-graphql";
import { ClientIdResolver } from "./clientId/queries";
import { teacherResolvers } from "./teacher";
import { userResolvers } from "./user";

export const resolvers: NonEmptyArray<Function> = [
	...userResolvers,
	...teacherResolvers,
	ClientIdResolver,
];
