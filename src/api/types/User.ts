export interface User {
    username: string;
    password?: string;
    displayname: string;
    role?: string;
    weight?: number | null;
    areWorkoutsPublic?: boolean;
}

export function isUser(obj: any): obj is User {
    return (
        typeof obj.username === "string" &&
        typeof obj.displayname === "string" &&
        (obj.password === undefined || typeof obj.password === "string") &&
        (obj.role === undefined || typeof obj.role === "string") &&
        (!obj.weight || typeof obj.weight === "number") &&
        (obj.areWorkoutsPublic === undefined ||
            typeof obj.areWorkoutsPublic === "boolean")
    );
}
