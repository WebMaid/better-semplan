import {
	serverDomain,
	serverPort,
	secureServerConnection as secure,
	apiRoute,
	subscriptionRoute,
} from "./definitions";

const port = serverPort ? `:${serverPort}` : null;
const webSocketProtocol: "ws" | "wss" = secure ? "wss" : "ws";
const httpProtocol: "http" | "https" = secure ? "https" : "http";
export const serverUrl = `${httpProtocol}://${serverDomain}${port}`;
export const wsServerUrl = `${webSocketProtocol}://${serverDomain}${port}`;
export const apiUrl = `${serverUrl}/${apiRoute}`;
export const wsUrl = `${wsServerUrl}/${subscriptionRoute}`;
