import type { HTMLInputTypeAttribute, ReactNode } from "react";

interface Props {
    label: ReactNode;
    type: HTMLInputTypeAttribute;
    inputId: string;
    name: string;
    defaultValue?: string;
    required?: boolean;
    wrapperClasses?: string;
}

export default function FormField(props: Props) {
    const labelIsAfterInput = props.type === "checkbox";
    const classes = "form-field " + props.wrapperClasses;

    return (
        <div className={classes}>
            {!labelIsAfterInput && (
                <label htmlFor={props.inputId}>{props.label}</label>
            )}
            <input
                type={props.type}
                id={props.inputId}
                name={props.name}
                defaultValue={props.defaultValue}
                required={props.required}
            />
            {labelIsAfterInput && (
                <label htmlFor={props.inputId}>{props.label}</label>
            )}
        </div>
    );
}
