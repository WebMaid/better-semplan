import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserAuthSubscriptionResponse {
	@Field(() => Boolean)
	authenticated: boolean;
}
