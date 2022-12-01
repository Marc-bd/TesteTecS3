export interface IcontatRequest {
	fullname: string;
	phoneNumber: string;
	email: string;
}

export interface IcontatReturn {
	id: string;
	fullname: string;
	phoneNumber: string;
	email: string;
	createdAt: Date;
}
