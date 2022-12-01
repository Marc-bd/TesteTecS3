import { Exclude } from "class-transformer";
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

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

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
