import type { ExerciseType } from "./types/ExerciseType";
import { isProblemDetail, type ProblemDetail } from "./types/ProblemDetail";

export default async function createExerciseType(
    exerciseType: ExerciseType,
): Promise<ProblemDetail | undefined> {
    const url = import.meta.env.VITE_API_URL + "exercise-types";

    const token = localStorage.getItem("jwt");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(exerciseType),
    });

    if (response.ok) {
        return;
    }

    if (
        response.status >= 400 &&
        response.status < 500 &&
        response.headers.get("content-type")?.includes("application/json")
    ) {
        const json = await response.json();
        if (isProblemDetail(json)) return json;
    }

    throw new Error(
        "Could not create exercise type - Status: " + response.status,
    );
}
