import { DataSource } from "typeorm";

import { ENTITIES } from "../modules";
import { MIGRATIONS } from "./migrations";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "ranking",
    migrations: MIGRATIONS,
    entities: ENTITIES,
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
