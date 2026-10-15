import { useContext } from "react";
import { useFetcher } from "react-router";
import { CloseContext } from "../../components/globalModal/CloseContext";

export default function Register() {
    const close = useContext(CloseContext);
    const fetcher = useFetcher();

    return (
        <fetcher.Form action="/register" method="post">
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
                <input type="text" id="username" name="username" />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="form-field">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                />
            </div>
            <div className="form-field">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit">
                {fetcher.state !== "idle" ? "Creating..." : "Create Account"}
            </button>
        </fetcher.Form>
    );
}
