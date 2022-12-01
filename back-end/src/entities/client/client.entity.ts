import { Exclude } from "class-transformer";
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Contact } from "../contacts/contact.entity";

@Entity("client")
export class Client {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	@Exclude()
	password: string;

	@Column()
	phoneNumber: string;

	@CreateDateColumn()
	createdAt: Date;

	@Column({ default: true })
	isActive: boolean;

	@OneToMany((type) => Contact, (contact) => contact.client, {
		eager: true,
	})
	contact: Contact[];

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
