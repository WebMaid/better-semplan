import { MiddlewareFn } from "type-graphql";
import { verifyJwt } from "../auth";
import { ServerContext } from "../types/serverContext";

/**
 * Middleware which adds the payload id without the requirement of an auth
 *
 * @param ServerContext
 * @param next
 * @returns
 */
export const preparePayload: MiddlewareFn<ServerContext> = async (
	{ context },
	next
) => {
	const authorization: string = context.req.headers["authorization"];
	if (!authorization) return next();
	if (!authorization.toLowerCase().startsWith("bearer ")) return next();

	try {
		const payload: any = await verifyJwt(authorization.split(" ")[1]);
		context.payload = { id: payload.id };
	} catch (err) {
		console.log(err);
		return next();
	}

	return next();
};
