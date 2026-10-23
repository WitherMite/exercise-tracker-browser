import style from "./editExerciseForm.module.css";
import { useContext, useState, type ReactNode } from "react";
import { CloseContext } from "../globalModal/CloseContext";
import { useFetcher } from "react-router";
import FormField from "../formField/FormField";

interface Props {
    exerciseTypes?: readonly {
        label: ReactNode;
        value: string;
    }[];
}

export default function EditExerciseForm({ exerciseTypes }: Props) {
    const [isEditingType, setIsEditingType] = useState<boolean>(false);
    const close = useContext(CloseContext);
    const fetcher = useFetcher();

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
                    inputId="name"
                    name="name"
                    type="textarea"
                />
                {isEditingType ? (
                    <FormField
                        label="Exercise Type Name:"
                        inputId="exercise-type-name"
                        name="exercise-type-name"
                        type="text"
                        required
                    />
                ) : (
                    <FormField
                        label="Type:"
                        inputId="exercise-type-name"
                        name="exercise-type-name"
                        type="select"
                        selectOpts={exerciseTypes}
                        required
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
