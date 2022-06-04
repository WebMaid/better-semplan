import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { requestLink } from "./request";
import { webSocketLink } from "./socket";

export const splitLink = split(
	({ query }) => {
		const def = getMainDefinition(query);
		return (
			def.kind === "OperationDefinition" &&
			def.operation === "subscription"
		);
	},
	webSocketLink,
	requestLink
);
