import { type ExerciseType } from "./ExerciseType";

export interface Exercise {
    name: string;
    description: string;
    exerciseType: { name: string } | ExerciseType;
}

export function isExercise(obj: any): obj is Exercise {
    return (
        typeof obj?.name === "string" &&
        typeof obj?.description === "string" &&
        typeof obj?.exerciseType?.name === "string"
    );
}
