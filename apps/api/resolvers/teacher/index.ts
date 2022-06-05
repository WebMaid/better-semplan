import { NonEmptyArray } from "type-graphql";
import { teacherQueries } from "./queries";

export const teacherResolvers: NonEmptyArray<Function> = [...teacherQueries];
