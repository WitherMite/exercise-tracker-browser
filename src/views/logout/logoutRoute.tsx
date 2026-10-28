import { type RouteObject } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";
import Logout from "./Logout";
import { api } from "../../api/exerciseTrackerApi";

export const logoutRoute: RouteObject = {
    path: "/logout",
    element: (
        <GlobalModal>
            <Logout />
        </GlobalModal>
    ),
    action: async () => {
        return await api.user.logout();
    },
};
