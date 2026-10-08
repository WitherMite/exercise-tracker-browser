import { useEffect, useRef, type ReactNode } from "react";
import style from "./GlobalDialog.module.css";
import { CloseContext } from "./CloseContext";
import { useNavigate } from "react-router";

interface Props {
    children: ReactNode;
}

export default function GlobalDialog({ children }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            dialog.showModal();
        }
    }, []);

    const close = () => {
        if (dialogRef.current === null) return;
        dialogRef.current.close();
    };

    const handleClose = () => {
        navigate(-1);
    };

    return (
        <>
            <dialog
                ref={dialogRef}
                closedby="any"
                onClose={handleClose}
                className={style.modal}
            >
                <CloseContext value={close}>{children}</CloseContext>
            </dialog>
        </>
    );
}
