import * as express from "express";
import { Request, Response } from "express";
import { dataSource } from "./app-data-source";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
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

// app.get("/users", function (req: Request, res: Response) {});

// app.get("/users/:id", function (req: Request, res: Response) {});

// app.post("/users", function (req: Request, res: Response) {});

// app.put("/users/:id", function (req: Request, res: Response) {});

// app.delete("/users/:id", function (req: Request, res: Response) {});

app.listen(3000, () => {
    console.log("API listening on port 3000", process.env.DB_USERNAME);
});
