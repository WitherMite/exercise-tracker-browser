import loginUser from "./loginUser";
import { isCredentials } from "../types/Credentials";
import { isProblemDetail, type ProblemDetail } from "../types/ProblemDetail";
import type { User } from "../types/User";

export default async function registerUser(
    user: User,
): Promise<ProblemDetail | undefined> {
    const url = import.meta.env.VITE_API_URL + "users";
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });

    if (response.ok) {
        if (isCredentials(user)) {
            return await loginUser(user);
        }
        // shouldnt happen unless api is wrong and giving false 2XX
        throw new Error("Unexpected error registering user, cannot login", {
            cause: { response },
        });
    }

    if (
        response.status >= 400 &&
        response.status < 500 &&
        response.headers.get("content-type")?.includes("application/json")
    ) {
        const json = await response.json();
        if (isProblemDetail(json)) return json;
        if (response.status === 409) {
            return {
                ...json,
                detail: "Username taken.",
            };
        }
    }

    throw new Error("Could not register user - Status: " + response.status);
}
