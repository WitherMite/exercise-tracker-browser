import { isExercise } from "../types/Exercise";

export default async function getExerciseTypes() {
    const url = import.meta.env.VITE_API_URL + `exercises`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `Error fetching exercise types, status: ${response.status}`,
            );
        }

        const data = await response.json();
        if (Array.isArray(data) && data.every(isExercise)) {
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
