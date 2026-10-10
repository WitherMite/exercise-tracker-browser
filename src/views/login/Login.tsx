import { Form, useNavigation } from "react-router";
import GlobalModal from "../../components/globalModal/GlobalModal";

export default function Login() {
    const navigation = useNavigation();
    const username = localStorage.getItem("username");

    return (
        <GlobalModal>
            <Form action="/login" method="post">
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
                    {navigation.formAction === "/login"
                        ? "Logging in..."
                        : "Login"}
                </button>
            </Form>
        </GlobalModal>
    );
}
