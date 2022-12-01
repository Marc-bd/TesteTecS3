import { Client } from "../../entities/client/client.entity";
import { IclientRequest } from "../../interfaces/client.interface";
import { clientRepository } from "../../utils/repositories";
import { AppError } from "../../errors/appErrors";
import bcryptjs from "bcryptjs";

export const createClientService = async ({
	name,
	email,
	password,
	phoneNumber,
}: IclientRequest): Promise<Client> => {
	//Get all clientes from DB
	const AllClient = await clientRepository.find();
	// Check if the email is already registered in the database
	const clientExist = AllClient.find((client) => client.email === email);

	//Error if email already exist
	if (clientExist) {
		throw new AppError("Email already registred", 400);
	}

	//hash the password
	const hashpassword = bcryptjs.hashSync(password, 10);

	//insert request data in database with hashpassword
	const createClient = clientRepository.create({
		name,
		email,
		password: hashpassword,
		phoneNumber,
	});

	//save createdClient in database
	await clientRepository.save(createClient);

	//return object with new client
	return createClient;
};
