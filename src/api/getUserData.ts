import { redirect } from "react-router";

export default async function getUserData(): Promise<{ displayname: string }> {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("jwt");
    if (!username || !token) {
        throw redirect("/login");
    }

    const url = import.meta.env.VITE_API_URL + `users/${username}`;
    const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 403) {
        throw redirect("/login");
    } else if (!response.ok) {
        throw new Error(`Error fetching user, status: ${response.status}`);
    }

    const data = await response.json();
    if (typeof data.displayname !== "string") {
        throw new Error("Error fetching user, unexpected response", {
            cause: data,
        });
    }

    return { displayname: data.displayname };
}
