export interface ExerciseType {
    name: string;
}

export function isExerciseType(obj: any): obj is ExerciseType {
    return typeof obj.name === "string";
}
