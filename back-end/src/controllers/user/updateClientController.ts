import { Request, Response } from "express";
import { updateClientService } from "./../../services/users/updateClienteService";
import { instanceToPlain } from "class-transformer";

export const updateClientController = async (req: Request, res: Response) => {
	const { id } = req.params;

	const updateClient = await updateClientService(id, req.body);

	return res.status(200).json({
		message: "Client updated",
		client: instanceToPlain(updateClient),
	});
};
