import { Field, ObjectType } from "type-graphql";
import { TeacherDto } from "../../../../dtos/teacher/dto";

@ObjectType()
export class TeacherGetListResponse {
	@Field(() => [TeacherDto], { defaultValue: [] })
	teachers: TeacherDto[];
}
