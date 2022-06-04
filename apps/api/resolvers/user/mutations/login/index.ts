import {
	Arg,
	Ctx,
	Mutation,
	Query,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import {
	generateAccessToken,
	sendRefreshToken,
	verifyPassword,
} from "../../../../auth";
import { User } from "../../../../entities/User";
import { InvalidLoginException } from "../../../../errors/auth/invalid-login";
import { USER_AUTH_CHANGE } from "../../../../subscriptions/constants/user";
import { usePubSub } from "../../../../subscriptions/pubSub";
import { ServerContext } from "../../../../types/serverContext";
import { sleep } from "../../../../utils/sleep";
import { UserLoginResponse } from "./response";

@Resolver()
export class UserLoginResolver {
	@Mutation(() => UserLoginResponse)
	async loginUser(
		@Ctx() { res }: ServerContext,
		@Arg("mail") mail: string,
		@Arg("password") password: string,
		@Arg("clientId", () => Number, {
			nullable: true,
			defaultValue: null,
			description:
				"Only required for the react client, is used to update the login state on all websites opened with this browser",
		})
		clientId: number
	): Promise<UserLoginResponse> {
		const user = await User.findOne({
			where: {
				mail: mail.toLowerCase().trim(),
			},
			select: ["id", "password", "jwtSecret", "jwtVersion"],
		});

		if (!user) {
			throw new InvalidLoginException();
		}
		if (!verifyPassword(password, user.password)) {
			throw new InvalidLoginException();
		}

		const accessToken = await generateAccessToken(user);

		if (!accessToken) {
			throw new InvalidLoginException();
		}

		await sendRefreshToken(res, user);

		if (clientId) {
			await usePubSub().publish(USER_AUTH_CHANGE, {
				authenticated: true,
				clientId,
			});
		}

		return {
			accessToken,
		};
	}
}
