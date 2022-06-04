import {
	BaseEntity as TypeormBaseEntity,
	FindManyOptions,
	FindOneOptions,
	ObjectType,
	PrimaryGeneratedColumn,
} from "typeorm";
import { IdType } from "../../types/definitions";

export class BaseEntity extends TypeormBaseEntity {
	constructor() {
		super();
	}

	@PrimaryGeneratedColumn("uuid")
	id: IdType;

	static async any<T extends TypeormBaseEntity>(
		this: ObjectType<T>,
		optionsOrConditions?: FindManyOptions<T> | FindOneOptions<T>
	): Promise<boolean> {
		return (
			(await (this as any).getRepository().count(optionsOrConditions)) > 0
		);
	}

	static async none<T extends TypeormBaseEntity>(
		this: ObjectType<T>,
		optionsOrConditions?: FindManyOptions<T> | FindOneOptions<T>
	): Promise<boolean> {
		return (
			(await (this as any).getRepository().count(optionsOrConditions)) ==
			0
		);
	}
}
