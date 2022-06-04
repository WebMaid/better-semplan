import { BeforeInsert, Column, Entity } from "typeorm";
import { hashPassword } from "../auth";
import { generateJwtSecret, jwtSecretLength } from "../auth/jwt/generateSecret";
import { BaseEntity } from "./contracts/base";

@Entity()
export class User extends BaseEntity {
	constructor(username, mail, password) {
		super();
		this.username = username;
		this.mail = mail;
		this.password = hashPassword(password);
	}

	@Column({ length: 32, unique: true })
	username: string;

	@Column({
		length: 320,
		transformer: {
			to: (val: string) => val.toLowerCase(),
			from: (val: string) => val,
		},
		unique: true,
	})
	mail: string;

	@Column({ length: 88, select: false })
	password: string;

	@Column({ type: "int", default: 0, select: false })
	jwtVersion: number;

	@Column({
		length: jwtSecretLength,
		select: false,
	})
	jwtSecret: string;

	@BeforeInsert()
	genJwtSecret() {
		this.jwtSecret = generateJwtSecret();
	}
}
