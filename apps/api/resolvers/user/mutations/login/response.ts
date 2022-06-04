import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserLoginResponse {
	@Field({ defaultValue: null })
	accessToken: string;
}
