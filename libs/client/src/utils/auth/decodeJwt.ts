export const jwtDecode = (token: string) => {
	if (!token.includes(".")) {
		throw new Error("Invalid JWT-Token");
	}
	const parts = token.split(".");
	if (parts.length !== 3) {
		throw new Error("Invalid JWT-Token");
	}
	const encodedData = parts.at(1);
	if (!encodedData) {
		throw new Error("Invalid JWT-Token");
	}
	const buffer = Buffer.from(encodedData, "base64");
	const data = buffer.toString("ascii");
	return JSON.parse(data);
};
