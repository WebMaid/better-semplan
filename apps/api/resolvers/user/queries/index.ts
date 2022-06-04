import { NonEmptyArray } from "type-graphql";
import { CurrentUserResolver } from "./current";

export const userQueries: NonEmptyArray<Function> = [CurrentUserResolver];
