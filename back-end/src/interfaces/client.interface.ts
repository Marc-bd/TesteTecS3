export interface IclientRequest {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
}
export interface IClientUpdate {
	id?: string;
	name?: string;
	email?: string;
	password?: string;
	phoneNumber?: string;
}

export interface IclientReturnUpdate {
	name: string;
	email: string;
	password: string;
	phoneNumber?: string;
}
