import { useContext } from "react";
import { CloseContext } from "../globalModal/CloseContext";
import logoutUser from "../../api/logoutUser";
import GlobalModal, { type ModalButton } from "../globalModal/GlobalModal";

interface Props {
    button: ModalButton;
}

export default function ConfirmLogout({ button }: Props) {
    const close = useContext(CloseContext);
    return (
        <GlobalModal button={button}>
            <h1>Confirm Logout:</h1>
            <button onClick={close}>Back</button>
            <button
                onClick={() => {
                    logoutUser();
                    close();
                }}
            >
                Logout
            </button>
        </GlobalModal>
    );
}
