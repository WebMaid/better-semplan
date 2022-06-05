import { Column, Entity } from "typeorm";
import { BaseEntity } from "./contracts/base";

@Entity()
export class Teacher extends BaseEntity {
	constructor(
		firstname: string,
		lastname: string,
		workLoad: number,
		hireDate: Date
	) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.workLoad = workLoad;
		this.hireDate = hireDate;
	}

	@Column({ length: 50 })
	firstname: string;

	@Column({ length: 50 })
	lastname: string;

	@Column({ type: "int" })
	workLoad: number;

	@Column({ type: "timestamp" })
	hireDate: Date;
}
