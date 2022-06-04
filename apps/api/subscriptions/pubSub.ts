import { PubSub } from "graphql-subscriptions";
let pubSub: PubSub = null;
export const usePubSub = (): PubSub => {
	if (!pubSub) {
		pubSub = new PubSub();
	}
	return pubSub;
};
