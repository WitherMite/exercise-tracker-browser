import { useEffect, useRef, type ReactNode } from "react";
import style from "./GlobalModal.module.css";
import { CloseContext } from "./CloseContext";
import { useLocation, useNavigate } from "react-router";

export type ModalButton = {
    className: string | undefined;
    content: ReactNode;
};

interface Props {
    button?: ModalButton;
    children: ReactNode;
}

export default function GlobalModal({ button, children }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const open = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    };

    const close = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    useEffect(() => {
        if (!button) {
            open();
        }
    }, [button]);

    const handleClose = () => {
        if (button) return;
        // if popup rendered open without button, goes to previous page if there was one, otherwise to root if tab was opened direct from url
        if (location.key !== "default") {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    return (
        <>
            {button && (
                <button className={button.className} onClick={open}>
                    {button.content}
                </button>
            )}
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
