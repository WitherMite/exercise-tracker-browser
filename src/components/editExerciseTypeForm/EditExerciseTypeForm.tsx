import style from "./editExerciseTypeForm.module.css";
import { useContext } from "react";
import { CloseContext } from "../globalModal/CloseContext";
import { useFetcher } from "react-router";
import FormField, { type SelectOpt } from "../formField/FormField";
import {
    isProblemDetail,
    type ProblemDetail,
} from "../../api/types/ProblemDetail";
import FormErrors from "../formErrors/FormErrors";
import type { exercisesActionData } from "../../views/exercises/exercisesRoute";

interface Props {
    asOnlyControls?: boolean;
    formErrors?: ProblemDetail;
    validSelectValues?: {
        countTypes?: readonly SelectOpt[];
        loadTypes?: readonly SelectOpt[];
        workTimeTypes?: readonly SelectOpt[];
        restTypes?: readonly SelectOpt[];
    };
}

export default function EditExerciseTypeForm({
    validSelectValues,
    formErrors,
    asOnlyControls,
}: Props) {
    const close = useContext(CloseContext);

    const fetcher = useFetcher<exercisesActionData>();
    let errors: ProblemDetail | undefined;
    if (!asOnlyControls) {
        const data = fetcher.data;
        // guard statement to check if one problem detail, or as separate from enclosing form
        errors = isProblemDetail(data) ? data : data?.exerciseType;
    }

    const Controls = () => (
        <>
            <FormField
                label="Exercise Type Name:"
                inputId="exercise-type-name"
                name="exercise-type-name"
                type="text"
                required
            />
            <FormField
                label="Count Type:"
                inputId="count-type"
                name="count-type"
                type="select"
                selectOpts={validSelectValues?.countTypes}
                required
            />
            <FormField
                label="Load Type:"
                inputId="load-type"
                name="load-type"
                type="select"
                selectOpts={validSelectValues?.loadTypes}
                required
            />
            <FormField
                label="Work Time Type:"
                inputId="work-time-type"
                name="work-time-type"
                type="select"
                selectOpts={validSelectValues?.workTimeTypes}
                required
            />
            <FormField
                label="Rest Type:"
                inputId="rest-type"
                name="rest-type"
                type="select"
                selectOpts={validSelectValues?.restTypes}
                required
            />
            {/* if form errors from props, display, else if errors from fetcher, diplay those */}
            {formErrors ? (
                <FormErrors
                    detail={formErrors.detail}
                    errors={formErrors.errors}
                />
            ) : (
                errors && (
                    <FormErrors detail={errors.detail} errors={errors.errors} />
                )
            )}
        </>
    );

    return asOnlyControls ? (
        <Controls />
    ) : (
        <>
            <div className={style.formHeader}>
                <h1>New Exercise Type</h1>
                <button
                    type="button"
                    onClick={close}
                    className={style.closeBtn}
                >
                    x
                </button>
            </div>
            <fetcher.Form action="/exercises" method="post">
                <Controls />
                <button type="submit">
                    {fetcher.state !== "idle" ? "Submitting..." : "Submit"}
                </button>
            </fetcher.Form>
        </>
    );
}
