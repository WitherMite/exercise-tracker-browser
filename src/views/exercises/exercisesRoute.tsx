import type { RouteObject } from "react-router";
import getUserData from "../../api/getUserData";
import Exercises from "./Exercises";
import type { User } from "../../api/types/User";

export interface exercisesLoaderData {
    user?: User;
}

export const exercisesRoute: RouteObject = {
    path: "/exercises",
    element: <Exercises />,
    loader: async (): Promise<exercisesLoaderData> => {
        return { user: await getUserData() };
    },
};
