import { Query, Resolver } from "type-graphql";
import { nextClientId } from "../../../db/clientId";
import { ClientIdResponse } from "./response";

@Resolver()
export class ClientIdResolver {
	@Query(() => ClientIdResponse)
	async generateClientId(): Promise<ClientIdResponse> {
		return {
			clientId: await nextClientId(),
		};
	}
}
