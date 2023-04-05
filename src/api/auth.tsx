import { IUser } from "../interfaces/user";
import instance from "./instance";

export const signIn = (user: IUser) => {
    return instance.post("/signin", user);
}