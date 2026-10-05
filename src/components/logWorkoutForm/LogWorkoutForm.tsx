import { CloseContext } from "../dialogButton/CloseContext";
import style from "./LogWorkoutForm.module.css";
import { useContext } from "react";

export default function LogWorkoutForm() {
    const close = useContext(CloseContext);
    return (
        <>
            <div className={style.formHeader}>
                <h1>Log Workout</h1>
                <button
                    type="button"
                    onClick={close}
                    className={style.closeBtn}
                >
                    x
                </button>
            </div>
            <form action="">{"form here"}</form>
        </>
    );
}
