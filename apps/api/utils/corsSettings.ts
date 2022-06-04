import cors from "cors";
import { whiteList } from "../constants/cors/definitions";

export const corsSettings = () => {
	return cors({
		origin: (origin, callback) => {
			if (whiteList.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
	});
};
