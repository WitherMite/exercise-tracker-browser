import type { RouteObject } from "react-router";
import Register from "./Register";

export const registerRoute: RouteObject = {
    path: "/register",
    element: <Register />,
    action: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get("username");
        const password = formData.get("password");
        const confPassword = formData.get("confirm-password");
        if (
            typeof username !== "string" ||
            typeof password !== "string" ||
            typeof confPassword !== "string" ||
            password !== confPassword
        ) {
            // should change this to be validated before it gets here later, and error if is wrong
            return;
        }
        // await registerUser({ username, password });
        return;
    },
};
