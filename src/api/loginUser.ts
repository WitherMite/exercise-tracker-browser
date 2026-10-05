interface Credentials {
    username: string;
    password: string;
}

export default async function loginUser(credentials: Credentials) {
    console.log("logging in...");
    const url = import.meta.env.VITE_API_URL + "auth";
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error("Could not log in user - Status: " + response.status);
    }

    const json = await response.json();
    const token = json.accessToken;

    if (token && typeof token === "string") {
        localStorage.setItem("jwt", token);
        localStorage.setItem("username", credentials.username);
    }
}
