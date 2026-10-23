import type { ReactNode } from "react";
import Card from "../../components/card/Card";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import style from "./Exercises.module.css";
import { useLoaderData } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";
import EditExerciseForm from "../../components/editExerciseForm/editExerciseForm";
import type { exercisesLoaderData } from "./exercisesRoute";

export default function Exercises() {
    const { user, exerciseTypes } = useLoaderData<exercisesLoaderData>();
    const canManageExercises = user?.role === "admin";
    const categories = exerciseTypes?.map((type) => {
        return { id: type.name, ...type };
    });

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
                            <EditExerciseForm
                                exerciseTypes={exerciseTypes?.map((type) => {
                                    return {
                                        label: type.name,
                                        value: type.name,
                                    };
                                })}
                            />
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
