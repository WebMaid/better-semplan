import { Field, ObjectType } from "type-graphql";
import { UserDto } from "../../../../dtos/user";

@ObjectType()
export class UserGetCurrentResponse {
	@Field(() => UserDto, { defaultValue: null })
	user: UserDto;
}
