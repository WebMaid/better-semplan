import { Query, Resolver } from "type-graphql";
import { Teacher } from "../../../../entities/Teacher";
import { TeacherGetListResponse } from "./response";

@Resolver()
export class TeacherGetListResolver {
	@Query(() => TeacherGetListResponse)
	async getTeacherList(): Promise<TeacherGetListResponse> {
		const teachers = await Teacher.find();

		return {
			teachers,
		};
	}
}
