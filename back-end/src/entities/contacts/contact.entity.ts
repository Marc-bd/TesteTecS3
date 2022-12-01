import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("contact")
export class Contact {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string;

	@Column()
	name: string;

	@Column()
	phoneNumber: string;

	@Column()
	emails: string[];

	@CreateDateColumn()
	createdAt: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
