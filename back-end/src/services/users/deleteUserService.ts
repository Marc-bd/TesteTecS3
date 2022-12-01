import { clientRepository } from "../../utils/repositories";
import { AppError } from "./../../errors/appErrors";
import { validate as uuidValidate } from "uuid";

export const deleteClientService = async (id: string): Promise<Boolean> => {
	//check if id is valid
	const validUuid = uuidValidate(id);

	if (!validUuid) {
		throw new AppError("Invalid ID", 400);
	}

	//find client in repository
	const client = await clientRepository.findOneBy({ id: id });

	if (!client) {
		throw new AppError("Client Not Found", 404);
	}

	//Inactive client
	const softDelete = await clientRepository.update(id, {
		isActive: false,
	});

	return true;
};
