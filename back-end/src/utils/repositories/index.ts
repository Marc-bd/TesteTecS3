import { Client } from "../../entities/client/client.entity";
import { Contact } from "../../entities/contacts/contact.entity";
import { AppDataSource } from "./../../data-source";

/*

This file was made to avoid code repetition, since the entity repositories will be called in several API services.
So, we just call the constant to get access to the repository.


*/

//REPOSITORIES
const clientRepository = AppDataSource.getRepository(Client);
const contactRepository = AppDataSource.getRepository(Contact);

export { clientRepository, contactRepository };
