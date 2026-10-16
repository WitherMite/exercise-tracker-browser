import style from "./FormErrors.module.css";

interface Props {
    detail: string;
    errors?: string[];
}

export default function FormErrors({ detail, errors }: Props) {
    return (
        <div className={style.formErrors}>
            <h3 className={style.errorDetail}>{detail}</h3>
            {errors && (
                <ul className={style.errorList}>
                    {errors.map((error, i) => (
                        <li key={i} className={style.error}>
                            {error}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
