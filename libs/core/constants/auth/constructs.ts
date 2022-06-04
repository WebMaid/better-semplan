import { serverUrl } from "../server";
import { refreshTokenRoute } from "./definitions";

export const refreshTokenUrl = `${serverUrl}${refreshTokenRoute}`;
