import { useFetcher, useNavigation } from "react-router";

export default function Login() {
    const navigation = useNavigation();
    const fetcher = useFetcher();
    const username = localStorage.getItem("username");

    return (
        <fetcher.Form action="/login" method="post">
            <div className="form-field">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue={username || ""}
                />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">
                {navigation.formAction === "/login" ? "Logging in..." : "Login"}
            </button>
        </fetcher.Form>
    );
}
