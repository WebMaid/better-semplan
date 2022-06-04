import { Field, ObjectType } from "type-graphql";
import { nullable } from "./constants/fieldOptions";
import { BaseDto } from "./contracts/base";

@ObjectType()
export class UserDto extends BaseDto {
	@Field(nullable)
	username?: string;

	@Field(nullable)
	mail?: string;
}
