import type { ReactNode } from "react";
import Card from "../../components/card/Card";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import style from "./Exercises.module.css";
import { useLoaderData } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";
import EditExerciseForm from "../../components/editExerciseForm/editExerciseForm";
import type { exercisesLoaderData } from "./exercisesRoute";
import type { SelectOpt } from "../../components/formField/FormField";
import EditExerciseTypeForm from "../../components/editExerciseTypeForm/EditExerciseTypeForm";

export default function Exercises() {
    const { user, formSelectOptions } = useLoaderData<exercisesLoaderData>();
    const canManageExercises = user?.role === "admin";
    // todo: should get data from loader in correct shape to be immediately usable instead
    const categories = formSelectOptions?.exerciseTypes?.map((type) => {
        return { id: type.name, ...type };
    });

    const selectValues = {
        exerciseTypes: formSelectOptions?.exerciseTypes?.map(selectOptFactory),
        countTypes: formSelectOptions?.countTypes?.map(selectOptFactory),
        loadTypes: formSelectOptions?.loadTypes?.map(selectOptFactory),
        workTimeTypes: formSelectOptions?.workTimeTypes?.map(selectOptFactory),
        restTypes: formSelectOptions?.restTypes?.map(selectOptFactory),
    };

    return (
        <>
            <SearchHeader
                label="EXERCISE LIBRARY"
                categories={categories}
                className={style.searchHeader}
            />
            <main>
                <div className={style.infoTrack}>
                    {canManageExercises && (
                        <div className={style.formBtnWrapper}>
                            <GlobalModal
                                button={{
                                    className: style.newExerciseBtn,
                                    content: "New Exercise",
                                }}
                            >
                                <EditExerciseForm
                                    validSelectValues={selectValues}
                                />
                            </GlobalModal>
                            <GlobalModal
                                button={{
                                    className: style.newExerciseTypeBtn,
                                    content: "New Exercise Type",
                                }}
                            >
                                <EditExerciseTypeForm
                                    validSelectValues={selectValues}
                                />
                            </GlobalModal>
                        </div>
                    )}
                    <p className={style.exerciseCount}>24 Exercises</p>
                </div>
                <div className={style.cardGrid}>{placeholderCards(24)}</div>
            </main>
        </>
    );
}

function selectOptFactory(type: {
    name: string;
    label?: ReactNode;
}): SelectOpt {
    return {
        label: type.label || type.name,
        value: type.name,
    };
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
