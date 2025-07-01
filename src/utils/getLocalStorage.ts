import { User } from "@/types/authType";

export function getLocalStorage(): User{
    const localUser = localStorage.getItem('user');

    if(!localUser){
        throw new Error("User not found!");
    }

    const user = JSON.parse(localUser);
    return user;
}