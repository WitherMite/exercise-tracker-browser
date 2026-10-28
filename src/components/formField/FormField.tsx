import type { HTMLInputTypeAttribute, ReactNode } from "react";

export interface SelectOpt {
    label: ReactNode;
    value: string;
}

interface Props {
    label: ReactNode;
    type: HTMLInputTypeAttribute | "textarea" | "select";
    inputId: string;
    name: string;
    defaultValue?: string;
    required?: boolean;
    wrapperClasses?: string;
    selectMultiple?: boolean;
    selectOpts?: readonly SelectOpt[];
}

export default function FormField(props: Props) {
    const labelIsAfterInput = props.type === "checkbox";
    // undefined gets coerced to the string "undefined" here if concatenated like this, so we check instead
    const classes = props.wrapperClasses
        ? "form-field " + props.wrapperClasses
        : "form-field";

    return (
        <div className={classes}>
            {!labelIsAfterInput && (
                <label htmlFor={props.inputId}>{props.label}</label>
            )}
            {chooseInputElement(props)}
            {labelIsAfterInput && (
                <label htmlFor={props.inputId}>{props.label}</label>
            )}
        </div>
    );
}

function chooseInputElement(props: Props) {
    switch (props.type) {
        case "textarea":
            return (
                <textarea
                    id={props.inputId}
                    name={props.name}
                    defaultValue={props.defaultValue}
                    required={props.required}
                ></textarea>
            );
        case "select":
            return (
                <select
                    id={props.inputId}
                    name={props.name}
                    multiple={props.selectMultiple}
                    required={props.required}
                    defaultValue={props.defaultValue}
                >
                    {props.selectOpts?.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
            );
        default:
            return (
                <input
                    type={props.type}
                    id={props.inputId}
                    name={props.name}
                    defaultValue={props.defaultValue}
                    required={props.required}
                />
            );
    }
}
