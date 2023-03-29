import { resolve } from "path";
import { DataSource } from "typeorm";

import { MIGRATIONS } from "./migrations";

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    migrations: MIGRATIONS,
    entities: [resolve(__dirname, "..", "modules", "**", "entities", "*.ts")],
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });

export { AppDataSource };
