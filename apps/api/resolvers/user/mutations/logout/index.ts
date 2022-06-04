import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { resetRefreshToken } from "../../../../auth";
import { User } from "../../../../entities/User";
import { isAuth } from "../../../../middlewares/isAuth";
import { USER_AUTH_CHANGE } from "../../../../subscriptions/constants/user";
import { usePubSub } from "../../../../subscriptions/pubSub";
import { ServerContext } from "../../../../types/serverContext";
import { UserLogoutResponse } from "./response";

@Resolver()
export class UserLogoutResolver {
	@UseMiddleware(isAuth)
	@Mutation(() => UserLogoutResponse)
	async logoutUser(
		@Arg("clientId", () => Number, {
			nullable: true,
			defaultValue: null,
			description:
				"Only required for the react client, is used to update the login state on all websites opened with this browser",
		})
		clientId: number,
		@Ctx() { res, payload: { id } }: ServerContext
	): Promise<UserLogoutResponse> {
		const user = await User.findOne({
			where: {
				id,
			},
		});
		user.jwtVersion++;
		resetRefreshToken(res);
		if (clientId) {
			await usePubSub().publish(USER_AUTH_CHANGE, {
				authenticated: false,
				clientId,
			});
		}
		return {
			success: true,
		};
	}
}
