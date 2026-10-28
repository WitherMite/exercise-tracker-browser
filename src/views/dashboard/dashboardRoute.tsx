import type { RouteObject } from "react-router";
import Dashboard from "./Dashboard";
import type { User } from "../../api/types/User";
import { api } from "../../api/exerciseTrackerApi";

export interface dashboardLoaderData {
    user?: User;
}

export const dashboardRoute: RouteObject = {
    path: "/home",
    element: <Dashboard />,
    loader: async (): Promise<dashboardLoaderData> => {
        return { user: await api.user.getCurrent() };
    },
};
