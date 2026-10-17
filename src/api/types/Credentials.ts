export interface Credentials {
    username: string;
    password: string;
}

export function isCredentials(obj: any): obj is Credentials {
    return typeof obj.username === "string" && typeof obj.password === "string";
}
