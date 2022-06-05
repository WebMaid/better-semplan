import { Field, ID, ObjectType } from "type-graphql";
import { IdType } from "../../types/definitions";
import { nullable } from "../constants/fieldOptions";

@ObjectType()
export class TeacherDto {
	@Field(() => ID)
	id: IdType;

	@Field(nullable)
	firstname?: string;

	@Field(nullable)
	lastname?: string;

	@Field(() => Number, nullable)
	workLoad?: number;

	@Field(() => Date, nullable)
	hireDate?: Date;
}
