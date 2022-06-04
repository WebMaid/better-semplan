import { NonEmptyArray } from "type-graphql";
import { userMutations } from "./mutations";
import { userQueries } from "./queries";
import { userSubscriptions } from "./subscriptions";

export const userResolvers: NonEmptyArray<Function> = [
	...userQueries,
	...userMutations,
	...userSubscriptions,
];
