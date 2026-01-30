import { LocalStorageUser } from "@/types/userType";

export function getLocalStorageUser(): LocalStorageUser {
    const localUser = localStorage.getItem('user');

    if (!localUser) {
        throw new Error('User not found!');
    }

    let parsed: unknown;

    try {
        parsed = JSON.parse(localUser);
    } catch {
        throw new Error('Invalid JSON in localStorage');
    }

    if (
        typeof parsed !== 'object' ||
        parsed === null ||
        !('userId' in parsed) ||
        !('token' in parsed)
    ) {
        throw new Error('Invalid user shape in localStorage');
    }

    return parsed as LocalStorageUser;
}