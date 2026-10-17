import { useContext } from "react";
import { useFetcher } from "react-router";
import { CloseContext } from "../../components/globalModal/CloseContext";
import FormErrors from "../../components/formErrors/FormErrors";

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
            <div className="form-field">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className="form-field">
                <label htmlFor="displayname">Displayname:</label>
                <input
                    type="text"
                    id="displayname"
                    name="displayname"
                    required
                />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="form-field">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    required
                />
            </div>
            <div className="form-field">
                <input
                    type="checkbox"
                    id="are-workouts-public"
                    name="are-workouts-public"
                />
                <label htmlFor="are-workouts-public">
                    Allow other users to see my workouts
                </label>
            </div>
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
