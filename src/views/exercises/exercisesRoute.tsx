import type { RouteObject } from "react-router";
import getUserData from "../../api/getUserData";
import Exercises from "./Exercises";
import type { User } from "../../api/types/User";
import getExerciseTypes from "../../api/getExerciseTypes";

export interface exercisesLoaderData {
    user?: User;
    exerciseTypes?: {
        name: string;
    }[];
}

export const exercisesRoute: RouteObject = {
    path: "/exercises",
    element: <Exercises />,
    loader: async (): Promise<exercisesLoaderData> => {
        return {
            user: await getUserData(),
            exerciseTypes: await getExerciseTypes(),
        };
    },
    // action: async ({ request }) => {
    //     const formData = await request.formData();
    //     const exercise = {
    //         name: formData.get("name"),
    //         description: formData.get("description"),
    //         exerciseType: {
    //             name: formData.get("exercise-type-name"),
    //         },
    //     };
    // },
};
