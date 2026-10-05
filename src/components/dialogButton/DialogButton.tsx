import { useRef, type ReactNode } from "react";
import style from "./DialogButton.module.css";
import { CloseContext } from "./CloseContext";

interface Props {
    btnClass: string;
    children?: ReactNode;
}

export default function WorkoutLogForm({ btnClass, children }: Props) {
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
                <CloseContext value={close}>{children}</CloseContext>
            </dialog>
        </>
    );
}
