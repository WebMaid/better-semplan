import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "./base";

export class BaseDateEntity extends BaseEntity {
	@CreateDateColumn({ type: "timestamp" })
	createdAt: Date;

	@UpdateDateColumn({ type: "timestamp" })
	updatedAt: Date;
}
