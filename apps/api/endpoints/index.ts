import { refreshTokenRoute } from "@template/core";
import express, { Express } from "express";
import { addHealthEndpoints } from "./health";
import { refreshTokenEndpoint } from "./refresh-token";

export const addEndpoints = (app: Express) => {
	// non static
	app.post(refreshTokenRoute, refreshTokenEndpoint);
	addHealthEndpoints(app);

	// static
	app.use("/lang", express.static(__dirname + "/../translations"));
	app.use("/public", express.static(__dirname + "/../public"));
};
