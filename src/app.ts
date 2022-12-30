import * as express from "express";
import { Request, Response } from "express";
import { dataSource } from "./app-data-source";
import * as dotenv from "dotenv";
import routes from "./entity/routes";

dotenv.config();

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

const app = express();
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log("API listening on port 3000", process.env.DB_USERNAME);
});
