import type { HTMLInputTypeAttribute, ReactNode } from "react";

interface Props {
    label: ReactNode;
    type: HTMLInputTypeAttribute | "textarea" | "select";
    inputId: string;
    name: string;
    defaultValue?: string;
    required?: boolean;
    wrapperClasses?: string;
    selectMultiple?: boolean;
    selectOpts?: readonly {
        label: ReactNode;
        value: string;
    }[];
}

export default function FormField(props: Props) {
    const labelIsAfterInput = props.type === "checkbox";
    const classes = "form-field " + props.wrapperClasses;

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
                >
                    {props.selectOpts?.map((option) => {
                        return (
                            <option
                                key={option.value}
                                value={option.value}
                                selected={option.value === props.defaultValue}
                            >
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
