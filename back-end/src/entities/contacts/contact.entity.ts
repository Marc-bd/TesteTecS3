import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Client } from "./../client/client.entity";

@Entity("contact")
export class Contact {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string;

	@Column()
	name: string;

	@Column()
	phoneNumber: string;

	@Column()
	emails: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne((type) => Client, (client) => client.contact)
	client: Client;
	user: any;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
