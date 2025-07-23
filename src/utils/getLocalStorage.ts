export function getLocalStorageToken(): string{
    const localUser = localStorage.getItem('user');

    if(!localUser){
        throw new Error("User not found!");
    }

    const user = JSON.parse(localUser);
    return user.token;
}

export function getLocalStorageUserId(): string{
    const localUser = localStorage.getItem('user');

    if(!localUser){
        throw new Error("User not found!");
    }

    const user = JSON.parse(localUser);
    return user.userId;
}