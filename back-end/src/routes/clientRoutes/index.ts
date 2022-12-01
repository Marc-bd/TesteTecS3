import { Router } from "express";
import { createClienteController } from "./../../controllers/user/createUserController";
import { updateClientController } from "./../../controllers/user/updateClientController";
import { deleteClientController } from "./../../controllers/user/deleteClientController";

const clientRoutes = Router();

clientRoutes.post("", createClienteController);
clientRoutes.patch("/:id", updateClientController);
clientRoutes.delete("/:id", deleteClientController);

export default clientRoutes;
