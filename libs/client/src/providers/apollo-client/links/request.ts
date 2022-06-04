import { ApolloLink } from "@apollo/client";
import { getAccessToken } from "..";

export const requestLink = new ApolloLink((operation, forward) => {
	operation.setContext({
		headers: {
			authorization: `bearer ${getAccessToken()}`,
		},
	});
	return forward(operation);
});
