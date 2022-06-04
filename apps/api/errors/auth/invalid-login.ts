import { ApolloError } from "apollo-server-express";

export class InvalidLoginException extends ApolloError {
	constructor() {
		super("The login is invalid", "LOGIN_INVALID_ERROR");
	}
}
