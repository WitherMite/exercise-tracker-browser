import style from "./LogWorkoutForm.module.css";
import { useContext } from "react";
import { CloseContext } from "../globalModal/CloseContext";
import GlobalModal, { type ModalButton } from "../globalModal/GlobalModal";

interface Props {
    button: ModalButton;
}

export default function LogWorkoutForm({ button }: Props) {
    const close = useContext(CloseContext);
    return (
        <GlobalModal button={button}>
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
        </GlobalModal>
    );
}
