import { useEffect, useRef, type ReactNode } from "react";
import style from "./GlobalModal.module.css";
import { CloseContext } from "./CloseContext";
import { useLocation, useNavigate } from "react-router";

interface Props {
    children: ReactNode;
}

export default function GlobalModal({ children }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    // open property on dialog doesnt open as modal, so we do this
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    const close = () => {
        if (dialogRef.current === null) return;
        dialogRef.current.close();
    };

    const handleClose = () => {
        // goes to previous page if there was one, otherwise to root if tab was opened direct from link
        if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/");
        }
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
