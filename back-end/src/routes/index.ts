import { Express } from "express";
import clientRoutes from "./clientRoutes/index";

export const appRoutes = (app: Express) => {
	app.use("/client", clientRoutes);
};
