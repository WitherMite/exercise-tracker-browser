import type { ReactNode } from "react";
import Card from "../../components/card/Card";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import style from "./Exercises.module.css";
import { useLoaderData } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";
import EditExerciseForm from "../../components/editExerciseForm/editExerciseForm";
import type { exercisesLoaderData } from "./exercisesRoute";

const categories = [
    { id: 0, name: "Any" },
    { id: 1, name: "Running" },
    { id: 2, name: "Weightlifting" },
];

export default function Exercises() {
    const { user } = useLoaderData<exercisesLoaderData>();
    const canManageExercises = user?.role === "admin";
    return (
        <>
            <SearchHeader
                label="EXERCISE LIBRARY"
                categories={categories}
                className={style.searchHeader}
            />
            <main>
                <div className={style.infoTrack}>
                    <p className={style.exerciseCount}>24 Exercises</p>
                    {canManageExercises && (
                        <GlobalModal
                            button={{
                                className: style.newExerciseBtn,
                                content: "New Exercise",
                            }}
                        >
                            <EditExerciseForm />
                        </GlobalModal>
                    )}
                </div>
                <div className={style.cardGrid}>{placeholderCards(24)}</div>
            </main>
        </>
    );
}

function placeholderCards(count: number) {
    const cards: ReactNode[] = [];
    for (let i = 0; i < count; i++) {
        cards.push(
            <Card key={i}>
                <div>{i + 1}</div>
            </Card>,
        );
    }
    return cards;
}
