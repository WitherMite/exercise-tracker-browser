import type { RouteObject } from "react-router";
import loginUser from "../../api/loginUser";
import Login from "./Login";

export const loginRoute: RouteObject = {
    path: "/login",
    element: <Login />,
    action: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get("username");
        const password = formData.get("password");
        if (typeof username !== "string" || typeof password !== "string") {
            // should change this to be validated before it gets here later, and error if is wrong
            return;
        }
        await loginUser({ username, password });
        return;
    },
};
