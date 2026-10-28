import type { Credentials } from "./types/Credentials";
import type { ProblemDetail } from "./types/ProblemDetail";

export default async function loginUser(
    credentials: Credentials,
): Promise<ProblemDetail | undefined> {
    const url = import.meta.env.VITE_API_URL + "auth";
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (response.ok) {
        const json = await response.json();
        const token = json.accessToken;

        if (token && typeof token === "string") {
            localStorage.setItem("jwt", token);
            localStorage.setItem("username", credentials.username);
        }
        return;
    }

    if (
        response.status >= 400 &&
        response.status < 500 &&
        response.headers.get("content-type")?.includes("application/json")
    ) {
        const json = await response.json();
        return json;
    }

    throw new Error("Could not log in user - Status: " + response.status);
}
