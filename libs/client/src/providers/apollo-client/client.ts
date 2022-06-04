import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { apiUrl } from "@template/core";
import { cache } from "./cache";
import { splitLink } from "./links/split";
import { tokenRefreshLink } from "./links/token";

export const client = new ApolloClient({
	link: ApolloLink.from([
		tokenRefreshLink,
		onError(({ graphQLErrors, networkError }) => {
			console.error(graphQLErrors);
			console.error(networkError);
		}),
		splitLink,
		new HttpLink({
			uri: apiUrl,
			credentials: "include",
		}),
	]),
	cache,
});
