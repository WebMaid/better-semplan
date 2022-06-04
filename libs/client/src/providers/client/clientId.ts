export const setClientId = (clientId: number) => {
	localStorage.setItem("clientId", clientId.toString());
};

export const getClientId = (): number => {
	return parseInt(localStorage.getItem("clientId") ?? "0");
};
