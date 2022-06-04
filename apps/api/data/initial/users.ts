import { mailDomain } from "@template/core";
import { User } from "../../entities/User";

export const initialUsers = [new User("admin", `admin@${mailDomain}`, "admin")];
