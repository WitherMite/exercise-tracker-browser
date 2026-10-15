import { useFetcher } from "react-router";
import { CloseContext } from "../../components/globalModal/CloseContext";
import { useContext } from "react";

export default function Login() {
    const close = useContext(CloseContext);
    const fetcher = useFetcher();
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
            <div className="form-field">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit">
                {fetcher.state !== "idle" ? "Logging in..." : "Login"}
            </button>
        </fetcher.Form>
    );
}
