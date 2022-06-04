import { Field, ID, ObjectType } from "type-graphql";
import { IdType } from "../../types/definitions";
import { nullable } from "../constants/fieldOptions";

@ObjectType()
export class BaseDto {
	@Field(() => ID, nullable)
	id?: IdType;
}
