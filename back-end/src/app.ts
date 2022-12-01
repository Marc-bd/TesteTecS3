import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { appRoutes } from "./routes";
import { handleErrorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(handleErrorMiddleware);

app.listen(3333, () => console.log("Server is running!"));
