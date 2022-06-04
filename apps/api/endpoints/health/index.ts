import { healthDatabaseRoute } from "@template/core";
import { Express } from "express";
import { databaseHealthEndpoint } from "./database";

export const addHealthEndpoints = (app: Express) => {
	app.get(healthDatabaseRoute, databaseHealthEndpoint);
};
