import type { RouteObject } from "react-router";
import Register from "./Register";
import GlobalModal from "../../components/globalModal/GlobalModal";
import type { ProblemDetail } from "../../api/types/ProblemDetail";
import registerUser from "../../api/registerUser";
import { isUser } from "../../api/types/User";

export const registerRoute: RouteObject = {
    path: "/register",
    element: (
        <GlobalModal>
            <Register />
        </GlobalModal>
    ),
    action: async ({ request }) => {
        const formData = await request.formData();
        const confPassword = formData.get("confirm-password");
        const weightField = formData.get("weight");
        const user = {
            username: formData.get("username"),
            password: formData.get("password"),
            displayname: formData.get("displayname"),
            areWorkoutsPublic: !!formData.get("are-workouts-public"),
            weight:
                weightField && typeof weightField === "string"
                    ? Number.parseFloat(weightField)
                    : undefined,
        };

        if (user.password !== confPassword) {
            return {
                detail: "passwords must match",
            } satisfies ProblemDetail;
        }

        if (isUser(user)) {
            try {
                return await registerUser(user);
            } catch (e) {
                if (e instanceof Error)
                    return { detail: e.message } satisfies ProblemDetail;
            }
        }
    },
};
