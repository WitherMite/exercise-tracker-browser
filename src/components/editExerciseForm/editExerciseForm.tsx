import style from "./editExerciseForm.module.css";
import { useContext, useState } from "react";
import { CloseContext } from "../globalModal/CloseContext";
import { useFetcher } from "react-router";
import FormField, { type SelectOpt } from "../formField/FormField";
import EditExerciseTypeForm from "../editExerciseTypeForm/EditExerciseTypeForm";
import FormErrors from "../formErrors/FormErrors";
import type { exercisesActionData } from "../../views/exercises/exercisesRoute";
import { isProblemDetail } from "../../api/types/ProblemDetail";

interface Props {
    validSelectValues?: {
        exerciseTypes?: readonly SelectOpt[];
        countTypes?: readonly SelectOpt[];
        loadTypes?: readonly SelectOpt[];
        workTimeTypes?: readonly SelectOpt[];
        restTypes?: readonly SelectOpt[];
    };
}

export default function EditExerciseForm({ validSelectValues }: Props) {
    const close = useContext(CloseContext);
    const fetcher = useFetcher<exercisesActionData>();
    const errors = fetcher.data;

    // guard statement to check if one problem detail, or one for each part of the form
    const [exerciseErrors, exerciseTypeErrors] = isProblemDetail(errors)
        ? [errors]
        : [errors?.exercise, errors?.exerciseType];

    // false by default unless there were errors in the expanded form, so will render open
    const [isEditingType, setIsEditingType] =
        useState<boolean>(!!exerciseTypeErrors);

    return (
        <>
            <div className={style.formHeader}>
                <h1>New Exercise</h1>
                <button
                    type="button"
                    onClick={close}
                    className={style.closeBtn}
                >
                    x
                </button>
            </div>
            <fetcher.Form action="/exercises" method="post">
                <FormField
                    label="Exercise Name:"
                    inputId="name"
                    name="name"
                    type="text"
                    required
                />
                <FormField
                    label="Description:"
                    inputId="description"
                    name="description"
                    type="textarea"
                />
                {isEditingType ? (
                    <EditExerciseTypeForm
                        validSelectValues={validSelectValues}
                        formErrors={exerciseTypeErrors}
                        asOnlyControls
                    />
                ) : (
                    <FormField
                        label="Type:"
                        inputId="exercise-type-name"
                        name="exercise-type-name"
                        type="select"
                        selectOpts={validSelectValues?.exerciseTypes}
                        required
                    />
                )}
                {exerciseErrors && (
                    <FormErrors
                        detail={exerciseErrors?.detail}
                        errors={exerciseErrors.errors}
                    />
                )}

                <button
                    type="button"
                    onClick={() => setIsEditingType(!isEditingType)}
                >
                    {isEditingType ? "Choose Existing Type" : "Edit Type"}
                </button>
                <button type="submit">
                    {fetcher.state !== "idle" ? "Submitting..." : "Submit"}
                </button>
            </fetcher.Form>
        </>
    );
}
