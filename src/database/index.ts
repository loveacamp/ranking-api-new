import "dotenv/config";
import { DataSource } from "typeorm";

import { ENTITIES } from "../modules";
import { MIGRATIONS } from "./migrations";

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    migrations: MIGRATIONS,
    entities: ENTITIES,
    logging: process.env.NODE_ENV === "development",
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });

export { AppDataSource };
