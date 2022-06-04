import { MiddlewareFn } from "type-graphql";
import { verifyJwt } from "../auth";
import { InvalidTokenException } from "../errors/auth/invalid-token";
import { NotAuthenticatedError } from "../errors/auth/not-authenticated";
import { ServerContext } from "../types/serverContext";

export const isAuth: MiddlewareFn<ServerContext> = async (
	{ context },
	next
) => {
	const authorization: string = context.req.headers["authorization"];
	if (!authorization) throw new NotAuthenticatedError();
	if (!authorization.toLowerCase().startsWith("bearer "))
		throw new InvalidTokenException();

	try {
		const payload: any = await verifyJwt(authorization.split(" ")[1]);
		context.payload = { id: payload.id };
	} catch (err) {
		console.log(err);
		throw new InvalidTokenException();
	}

	return next();
};
