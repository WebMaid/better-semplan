import { ApolloError } from "apollo-server-express";

export class InvalidTokenException extends ApolloError {
	constructor() {
		super("The token is invalid", "TOKEN_INVALID_ERROR");
	}
}
