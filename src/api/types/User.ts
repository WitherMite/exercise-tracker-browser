import { isCredentials, type Credentials } from "./Credentials";

export interface User extends Credentials {
    displayname: string;
    role?: string;
    weight?: number;
    areWorkoutsPublic?: boolean;
}

export function isUser(obj: any): obj is User {
    return (
        typeof obj.displayname === "string" &&
        (obj.role === undefined || typeof obj.role === "string") &&
        (obj.weight === undefined || typeof obj.weight === "number") &&
        (obj.areWorkoutsPublic === undefined ||
            typeof obj.areWorkoutsPublic === "boolean") &&
        isCredentials(obj)
    );
}
