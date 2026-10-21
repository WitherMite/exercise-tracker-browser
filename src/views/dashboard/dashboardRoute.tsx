import type { RouteObject } from "react-router";
import getUserData from "../../api/getUserData";
import Dashboard from "./Dashboard";
import type { User } from "../../api/types/User";

export interface dashboardLoaderData {
    user?: User;
}

export const dashboardRoute: RouteObject = {
    path: "/home",
    element: <Dashboard />,
    loader: async (): Promise<dashboardLoaderData> => {
        return { user: await getUserData() };
    },
};
