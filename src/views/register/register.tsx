import { useContext } from "react";
import { useFetcher } from "react-router";
import { CloseContext } from "../../components/globalModal/CloseContext";
import FormErrors from "../../components/formErrors/FormErrors";
import FormField from "../../components/formField/FormField";

// todo: add a weight field that automatically converts units to kg if needed
export default function Register() {
    const close = useContext(CloseContext);
    const fetcher = useFetcher();
    const formErrors = fetcher.data;

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
            <FormField
                label="Username:"
                inputId="username"
                name="username"
                type="text"
                required
            />
            <FormField
                label="Displayname:"
                inputId="displayname"
                name="displayname"
                type="text"
                required
            />
            <FormField
                label="Password:"
                inputId="password"
                name="password"
                type="password"
                required
            />
            <FormField
                label="Confirm Password:"
                inputId="confirm-password"
                name="confirm-password"
                type="password"
                required
            />
            <FormField
                label="Allow other users to see my workouts"
                inputId="are-workouts-public"
                name="are-workouts-public"
                type="checkbox"
            />
            {formErrors && (
                <FormErrors
                    detail={formErrors.detail}
                    errors={formErrors.errors}
                />
            )}
            <button type="submit">
                {fetcher.state !== "idle" ? "Creating..." : "Create Account"}
            </button>
        </fetcher.Form>
    );
}
