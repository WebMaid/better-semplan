import { mailDomain } from "@better-semplan/core";
import { User } from "../../entities/User";

export const initialUsers = [new User("admin", `admin@${mailDomain}`, "admin")];
