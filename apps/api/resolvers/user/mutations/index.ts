import { NonEmptyArray } from "type-graphql";
import { UserLoginResolver } from "./login";
import { UserLogoutResolver } from "./logout";

export const userMutations: NonEmptyArray<Function> = [
	UserLoginResolver,
	UserLogoutResolver,
];
