import { redirect } from "react-router";

export default async function logoutUser() {
    // check if way to void a jwt with server, i forget, otherwise we just forget token
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    redirect("/");
}
