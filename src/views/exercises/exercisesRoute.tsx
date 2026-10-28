import type { RouteObject } from "react-router";
import getUserData from "../../api/getUserData";
import Exercises from "./Exercises";
import type { User } from "../../api/types/User";
import getExerciseTypes from "../../api/getExerciseTypes";
import type { ReactNode } from "react";
import { isExerciseType } from "../../api/types/ExerciseType";
import { isExercise } from "../../api/types/Exercise";
import type { ProblemDetail } from "../../api/types/ProblemDetail";
import createExerciseType from "../../api/createExerciseType";
import createExercise from "../../api/createExercise";

interface FormSelectOption {
    name: string;
    label?: ReactNode;
}

interface Problems {
    exerciseType?: ProblemDetail;
    exercise?: ProblemDetail;
}

export type exercisesActionData = Problems | ProblemDetail | undefined;

export interface exercisesLoaderData {
    user?: User;
    formSelectOptions?: {
        exerciseTypes?: FormSelectOption[];
        countTypes?: FormSelectOption[];
        loadTypes?: FormSelectOption[];
        workTimeTypes?: FormSelectOption[];
        restTypes?: FormSelectOption[];
    };
}

export const exercisesRoute: RouteObject = {
    path: "/exercises",
    element: <Exercises />,
    loader: async (): Promise<exercisesLoaderData> => {
        // todo: move hardcoded values to some config for easier changes
        return {
            user: await getUserData(),
            formSelectOptions: {
                exerciseTypes: await getExerciseTypes(),
                countTypes: [
                    { name: "single" },
                    { name: "lap" },
                    { name: "set" },
                ],
                loadTypes: [
                    { name: "distance" },
                    { name: "bodyweight" },
                    { name: "weight" },
                ],
                workTimeTypes: [{ name: "time" }, { name: "repetition" }],
                restTypes: [
                    { name: "optional" },
                    { name: "beforeCount", label: "before count" },
                    { name: "afterCount", label: "after count" },
                ],
            },
        };
    },
    action: async ({ request }): Promise<exercisesActionData> => {
        const formData = await request.formData();
        const exercise = {
            name: formData.get("name"),
            description: formData.get("description"),
            exerciseType: {
                name: formData.get("exercise-type-name"),
                countType: formData.get("count-type"),
                loadType: formData.get("load-type"),
                workTimeType: formData.get("work-time-type"),
                restType: formData.get("rest-type"),
            },
        };

        try {
            const problems: Problems = {};
            if (isExerciseType(exercise.exerciseType)) {
                problems.exerciseType = await createExerciseType(
                    exercise.exerciseType,
                );
            }

            if (isExercise(exercise)) {
                problems.exercise = await createExercise(exercise);
            }
            return problems;
        } catch (e) {
            if (e instanceof Error)
                return { detail: e.message } satisfies ProblemDetail;
        }
    },
};
