import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ClientIdResponse {
	@Field(() => Number)
	clientId: number;
}
