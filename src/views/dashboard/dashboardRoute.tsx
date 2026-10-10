import type { RouteObject } from "react-router";
import getUserData from "../../api/getUserData";
import Dashboard from "./Dashboard";

export const dashboardRoute: RouteObject = {
    path: "/home",
    element: <Dashboard />,
    loader: async () => {
        return { user: await getUserData() };
    },
};
