// is there some way to make this programmatically generated instead of manually defining the enums multiple times acros the code? ts enums seem strange
export interface ExerciseType {
    name: string;
    countType: "single" | "lap" | "set";
    loadType: "distance" | "bodyweight" | "weight";
    workTimeType: "time" | "repetition";
    restType: "optional" | "beforeCount" | "afterCount";
}

const values = {
    countType: ["single", "lap", "set"],
    loadType: ["distance", "bodyweight", "weight"],
    workTimeType: ["time", "repetition"],
    restType: ["optional", "beforeCount", "afterCount"],
};

export function isExerciseType(obj: any): obj is ExerciseType {
    return (
        typeof obj?.name === "string" &&
        values.countType.includes(obj?.countType) &&
        values.loadType.includes(obj?.loadType) &&
        values.workTimeType.includes(obj?.workTimeType) &&
        values.restType.includes(obj?.restType)
    );
}
