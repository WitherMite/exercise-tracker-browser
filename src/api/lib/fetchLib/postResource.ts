import { isProblemDetail, type ProblemDetail } from "../../types/ProblemDetail";

// todo: return the resource on successful post, but is not needed yet
export default async function postResource<Type>(
    resourcePath: string,
    resource: Type,
): Promise<ProblemDetail | undefined> {
    const url = import.meta.env.VITE_API_URL + resourcePath;

    const token = localStorage.getItem("jwt");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(resource),
    });

    if (response.ok) {
        return;
    }

    if (
        response.status >= 400 &&
        response.status < 500 &&
        response.headers.get("content-type")?.includes("application/json")
    ) {
        const json = await response.json();
        if (isProblemDetail(json)) return json;
    }

    throw new Error(
        `Could not create ${resourcePath} - Status: ` + response.status,
    );
}
