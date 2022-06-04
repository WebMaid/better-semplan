import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const ormConfig: PostgresConnectionOptions = {
	type: "postgres",
	host: "localhost",
	database: "better-semplan",
	port: 5432,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	synchronize: true,
	logging: false,
	entities: [__dirname + "/entities/**/*.ts"],
	migrations: [__dirname + "/migrations/**/*.ts"],
	subscribers: [__dirname + "/subscribers/**/*.ts"],
	cli: {
		entitiesDir: __dirname + "/entities",
		migrationsDir: __dirname + "/migrations",
		subscribersDir: __dirname + "/subscribers",
	},
};
