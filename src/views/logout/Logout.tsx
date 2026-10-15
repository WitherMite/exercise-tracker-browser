import { useContext } from "react";
import { CloseContext } from "../../components/globalModal/CloseContext";
import { useFetcher } from "react-router";

export default function Logout() {
    const close = useContext(CloseContext);
    const fetcher = useFetcher();
    return (
        <fetcher.Form action="/logout" method="post">
            <h1>Confirm Logout:</h1>
            <button
                type="button"
                onClick={() => {
                    close();
                }}
            >
                Back
            </button>
            <button type="submit">
                {fetcher.state !== "idle" ? "Logging out..." : "Logout"}
            </button>
        </fetcher.Form>
    );
}
