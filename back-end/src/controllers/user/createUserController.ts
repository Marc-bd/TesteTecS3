import { Request, Response } from "express";
import { IclientRequest } from "../../interfaces/client.interface";
import { Client } from "./../../entities/client/client.entity";
import { createClientService } from "./../../services/users/createUserService";
import { instanceToPlain } from "class-transformer";

export const createClienteController = async (req: Request, res: Response) => {
	//get client data from request.body
	const { name, email, password, phoneNumber }: IclientRequest = req.body;

	//Service to create the client, if something is wrong, it will return an error to the user, otherwise it will return the registration made
	const client = await createClientService({
		name,
		email,
		password,
		phoneNumber,
	});

	//response with client created without password
	return res.status(201).json({
		message: "Your account has ben successfully created",
		client: instanceToPlain(client),
	});
};
