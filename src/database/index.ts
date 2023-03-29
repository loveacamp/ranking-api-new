import { resolve } from "path";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "ranking",
    migrations: ["./src/database/migrations/*.ts"],
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
