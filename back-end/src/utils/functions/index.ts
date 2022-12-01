import { AppError } from "../../errors/appErrors";
import { IClientUpdate } from "../../interfaces/client.interface";
import { clientRepository } from "../repositories";

export const removeEmptyProperties = (obj: IClientUpdate) => {
	Object.entries(obj).forEach(([key, value]) => {
		if (
			value === undefined ||
			!value ||
			value.replace(/\s+/g, "") === "" ||
			value === null ||
			value.length === 0
		) {
			delete obj[key as keyof typeof obj];
		}
	});

	return obj;
};
