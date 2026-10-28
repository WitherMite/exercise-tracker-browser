import { redirect, type RouteObject } from "react-router";
import Login from "./Login";
import GlobalModal from "../../components/globalModal/GlobalModal";
import type { ProblemDetail } from "../../api/types/ProblemDetail";
import { api } from "../../api/exerciseTrackerApi";

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
            const problem = await api.user.login({ username, password });
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
