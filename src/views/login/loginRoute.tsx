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
        const rememberUser = formData.get("remember");
        if (typeof username !== "string" || typeof password !== "string") {
            return;
        }
        await loginUser({ username, password }, rememberUser);
        return redirect("/");
    },
};
