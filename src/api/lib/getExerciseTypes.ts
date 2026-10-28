import { isExerciseType } from "../types/ExerciseType";

export default async function getExerciseTypes() {
    const url = import.meta.env.VITE_API_URL + `exercise-types`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error fetching exercise types, status: ${response.status}`,
            );
        }

        const data = await response.json();
        if (Array.isArray(data) && data.every(isExerciseType)) {
            return data;
        }

        throw new Error("Error fetching exercise types, unexpected response", {
            cause: data,
        });
    } catch (e) {
        console.error(e);
        return;
    }
}
