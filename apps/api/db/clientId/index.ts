import fs from "fs";

let clientId = 0;
const filePath = "/current";

export const initializeClientId = async () => {
	const data = await fs.readFileSync(__dirname + filePath, "utf-8");
	if (data == "") {
		return await fs.writeFileSync(
			__dirname + filePath,
			clientId.toString()
		);
	}
	clientId = parseInt(data);
};

export const nextClientId = async (): Promise<number> => {
	clientId++;
	await fs.writeFileSync(__dirname + filePath, clientId.toString());
	return clientId;
};
