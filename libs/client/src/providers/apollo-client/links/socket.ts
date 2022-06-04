import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { wsUrl } from "@better-semplan/core";

export const webSocketLink = new WebSocketLink(
	new SubscriptionClient(wsUrl, {
		reconnect: true,
	})
);
