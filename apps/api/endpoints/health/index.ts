import { healthDatabaseRoute } from "@better-semplan/core";
import { Express } from "express";
import { databaseHealthEndpoint } from "./database";

export const addHealthEndpoints = (app: Express) => {
	app.get(healthDatabaseRoute, databaseHealthEndpoint);
};
