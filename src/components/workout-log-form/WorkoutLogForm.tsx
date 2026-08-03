import { useRef } from "react";
import style from "./WorkoutLogForm.module.css";

interface Props {
    btnClass: string;
}

export default function WorkoutLogForm({ btnClass }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const open = () => {
        if (dialogRef.current === null) return;
        dialogRef.current.showModal();
    };

    const close = () => {
        if (dialogRef.current === null) return;
        dialogRef.current.close();
    };

    return (
        <>
            <button className={`${btnClass}`} onClick={open}>
                + Log
            </button>
            <dialog ref={dialogRef} closedby="any" className={style.modal}>
                <div className={style.modalHeader}>
                    <h1>Log Workout</h1>
                    <button
                        type="button"
                        onClick={close}
                        className={style.closeBtn}
                    >
                        x
                    </button>
                </div>
                <form action=""></form>
            </dialog>
        </>
    );
}
