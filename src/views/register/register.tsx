import { Form, useNavigation } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";

export default function Register() {
    const navigation = useNavigation();

    return (
        <GlobalModal>
            <Form action="/login" method="post">
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
                <button type="submit">
                    {navigation.formAction === "/register"
                        ? "Creating..."
                        : "Create Account"}
                </button>
            </Form>
        </GlobalModal>
    );
}
