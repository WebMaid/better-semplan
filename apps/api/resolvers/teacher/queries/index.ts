import { NonEmptyArray } from "type-graphql";
import { TeacherGetListResolver } from "./list";

export const teacherQueries: NonEmptyArray<Function> = [TeacherGetListResolver];
