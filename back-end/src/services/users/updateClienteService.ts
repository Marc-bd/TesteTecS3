import { IClientUpdate } from "../../interfaces/client.interface";
import { clientRepository } from "../../utils/repositories";
import { removeEmptyProperties } from "./../../utils/functions/index";
import { AppError } from "./../../errors/appErrors";
import { Client } from "../../entities/client/client.entity";
import { validate as uuidValidate } from "uuid";

export const updateClientService = async (
	id: string,
	data: IClientUpdate
): Promise<Client> => {
	//Check if id is valid
	const validUuid = uuidValidate(id);

	if (!validUuid) {
		throw new AppError("Invalid ID", 400);
	}

	//get the client
	const client = await clientRepository.findOneBy({ id: id });

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	//function to clean data recived
	const cleanData: IClientUpdate = removeEmptyProperties(data);

	//updateClient
	const updateClient = clientRepository.save({
		...client,
		...cleanData,
	});

	const clientUpdated = await clientRepository.findOneBy({ id: id });

	return clientUpdated!;
};
