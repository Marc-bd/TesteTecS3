import { Request, Response } from "express";
import { deleteClientService } from "../../services/users/deleteUserService";

export const deleteClientController = async (req: Request, res: Response) => {
	const { id } = req.params;

	const deleteCliente = await deleteClientService(id);

	return res.status(200).json({
		message: "User has been deleted",
	});
};
