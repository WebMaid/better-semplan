import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { User } from "../../../../entities/User";
import { preparePayload } from "../../../../middlewares/preparePayload";
import { ServerContext } from "../../../../types/serverContext";
import { UserGetCurrentResponse } from "./response";

@Resolver()
export class CurrentUserResolver {
	@UseMiddleware(preparePayload)
	@Query(() => UserGetCurrentResponse)
	async currentUser(
		@Ctx() { payload }: ServerContext
	): Promise<UserGetCurrentResponse> {
		if (!payload?.id) {
			return {
				user: null,
			};
		}
		const user = await User.findOne({
			where: {
				id: payload.id,
			},
		});

		return {
			user,
		};
	}
}
