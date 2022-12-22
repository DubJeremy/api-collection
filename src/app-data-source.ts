import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["entity/*.ts"],
    logging: false,
    synchronize: false,
});
