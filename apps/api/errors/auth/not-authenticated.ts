import { ApolloError } from "apollo-server-express";

export class NotAuthenticatedError extends ApolloError {
	constructor() {
		super("Please authenticate with a token", "NOT_AUTHENTICATED_ERROR");
	}
}
