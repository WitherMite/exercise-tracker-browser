export interface ProblemDetail {
    detail: string;
    status?: number;
    title?: string;
    instance?: string;
    type?: string;
    errors?: string[];
}

export function isProblemDetail(obj: any): obj is ProblemDetail {
    return (
        typeof obj.detail === "string" &&
        (obj.status === undefined || typeof obj.status === "number") &&
        (obj.title === undefined || typeof obj.title === "string") &&
        (obj.instance === undefined || typeof obj.instance === "string") &&
        (obj.type === undefined || typeof obj.type === "string") &&
        Array.isArray(obj.errors) &&
        obj.errors.every((error: any) => typeof error === "string")
    );
}
