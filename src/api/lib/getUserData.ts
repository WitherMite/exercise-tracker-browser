import { isUser, type User } from "../types/User";

export default async function getUserData(): Promise<User | undefined> {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("jwt");
    if (!username || !token) {
        return;
    }
    // user shouldnt change very often, unless we do it ourselves, so can cache data to session instead of grabbing it on every refresh
    const userJson = sessionStorage.getItem("user");
    const user = userJson && JSON.parse(userJson);
    if (user && isUser(user)) {
        return user;
    }

    const url = import.meta.env.VITE_API_URL + `users/${username}`;
    try {
        const response = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
            throw new Error(`Error fetching user, status: ${response.status}`);
        }

        const data = await response.json();
        if (isUser(data)) {
            sessionStorage.setItem("user", JSON.stringify(data));
            return data;
        }

        throw new Error("Error fetching user, unexpected response", {
            cause: data,
        });
    } catch (e) {
        console.error(e);
        return;
    }
}
