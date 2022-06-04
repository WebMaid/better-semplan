import { Arg, Resolver, Root, Subscription } from "type-graphql";
import { USER_AUTH_CHANGE } from "../../../../subscriptions/constants/user";
import { UserAuthSubscriptionResponse } from "./response";
@Resolver()
export class UserAuthSubscriptionResolver {
	@Subscription(() => UserAuthSubscriptionResponse, {
		topics: USER_AUTH_CHANGE,
		filter: ({ payload, args }) => {
			return payload.clientId === args.clientId;
		},
	})
	listenAuthChanges(
		@Arg("clientId") clientId: number,
		@Root()
		payload: {
			authenticated: boolean;
			clientId: number;
		}
	): UserAuthSubscriptionResponse {
		if (clientId !== payload.clientId) return;
		return {
			authenticated: payload.authenticated ?? false,
		};
	}
}
