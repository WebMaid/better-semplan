import { NonEmptyArray } from "type-graphql";
import { UserAuthSubscriptionResolver } from "./auth";

export const userSubscriptions: NonEmptyArray<Function> = [
	UserAuthSubscriptionResolver,
];
