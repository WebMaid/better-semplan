import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserLogoutResponse {
	@Field(() => Boolean)
	success: boolean;
}
