import { redirect } from "react-router";

export default async function getUserData(): Promise<{ displayname: string }> {
    const url = import.meta.env.VITE_API_LOGIN_URL;
    const response = await fetch(url);

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

/* 

It seems we dont set httpOnly headers in frontend, but send credentials through to backend and copy the headers that are returned?
will have to rethink a few things to get this working, move the token out of the response body,
and seems would be ok to send the user's data in body instead on sucessful auth instead for memoization/caching

however, am partially successful as this does reach the server and correctly gets a 403

*/
