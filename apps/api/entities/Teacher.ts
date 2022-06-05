import { Column, Entity } from "typeorm";
import { BaseEntity } from "./contracts/base";

@Entity()
export class Teacher extends BaseEntity {
	@Column({ length: 50 })
	firstname: string;

	@Column({ length: 50 })
	lastname: string;

	@Column({ type: "int" })
	workLoad: number;

	@Column({ type: "timestamp" })
	hireDate: Date;
}
