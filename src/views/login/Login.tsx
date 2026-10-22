import { useFetcher } from "react-router";
import { CloseContext } from "../../components/globalModal/CloseContext";
import { useContext } from "react";
import FormErrors from "../../components/formErrors/FormErrors";
import FormField from "../../components/formField/FormField";

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
            <FormField
                label="Username:"
                inputId="username"
                name="username"
                type="text"
                defaultValue={username || ""}
                required
            />
            <FormField
                label="Password:"
                inputId="password"
                name="password"
                type="password"
                required
            />
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
