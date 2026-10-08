import { useContext } from "react";
import { CloseContext } from "../globalDialog/CloseContext";
import logoutUser from "../../api/logoutUser";

export default function ConfirmLogout() {
    const close = useContext(CloseContext);
    return (
        <>
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
        </>
    );
}
