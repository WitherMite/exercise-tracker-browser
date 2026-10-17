import { useFetcher } from "react-router";
import { CloseContext } from "../../components/globalModal/CloseContext";
import { useContext } from "react";
import FormErrors from "../../components/formErrors/FormErrors";

export default function Login() {
    const close = useContext(CloseContext);
    const fetcher = useFetcher();
    const formErrors = fetcher.data;
    const username = localStorage.getItem("username");

    return (
        <fetcher.Form action="/login" method="post">
            <button
                type="button"
                onClick={() => {
                    close();
                }}
            >
                X
            </button>
            <div className="form-field">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue={username || ""}
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            {formErrors && (
                <FormErrors
                    detail={formErrors.detail}
                    errors={formErrors.errors}
                />
            )}
            <button type="submit">
                {fetcher.state !== "idle" ? "Logging in..." : "Login"}
            </button>
        </fetcher.Form>
    );
}
