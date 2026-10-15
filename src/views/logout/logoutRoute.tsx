import { redirect, type RouteObject } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";
import Logout from "./Logout";
import logoutUser from "../../api/logoutUser";

export const logoutRoute: RouteObject = {
    path: "/logout",
    element: (
        <GlobalModal>
            <Logout />
        </GlobalModal>
    ),
    action: async () => {
        await logoutUser();
        return redirect("/");
    },
};
