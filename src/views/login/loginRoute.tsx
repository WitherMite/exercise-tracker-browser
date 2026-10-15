import { redirect, type RouteObject } from "react-router";
import loginUser from "../../api/loginUser";
import Login from "./Login";
import GlobalModal from "../../components/globalModal/GlobalModal";

export const loginRoute: RouteObject = {
    path: "/login",
    element: (
        <GlobalModal>
            <Login />
        </GlobalModal>
    ),
    action: async ({ request }) => {
        const formData = await request.formData();
        const username = formData.get("username");
        const password = formData.get("password");
        if (typeof username !== "string" || typeof password !== "string") {
            // should change this to be validated before it gets here later, and error if is wrong
            return;
        }
        await loginUser({ username, password });
        return redirect("/");
    },
};
