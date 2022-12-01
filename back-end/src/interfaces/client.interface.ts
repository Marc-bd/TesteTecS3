export interface IclientRequest {
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
}
export interface IclientReturn {
	id: string;
	name: string;
	email: string;
	password: string;
	phoneNumber: string;
	createdAt: Date;
}
