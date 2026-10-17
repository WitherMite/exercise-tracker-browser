import { redirect, type RouteObject } from "react-router";
import loginUser from "../../api/loginUser";
import Login from "./Login";
import GlobalModal from "../../components/globalModal/GlobalModal";
import type { ProblemDetail } from "../../api/types/ProblemDetail";

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
            return;
        }
        try {
            const problem = await loginUser({ username, password });
            return problem ? problem : redirect("/");
        } catch (e) {
            if (e instanceof Error) {
                return {
                    detail: e.message,
                } satisfies ProblemDetail;
            }
        }
    },
};
