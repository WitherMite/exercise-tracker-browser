import { Form, useNavigation } from "react-router";
import GlobalModal, {
    type ModalButton,
} from "../../components/globalModal/GlobalModal";

interface Props {
    button?: ModalButton;
}

export default function Register({ button }: Props) {
    const navigation = useNavigation();

    return (
        <GlobalModal button={button}>
            <Form action="/register" method="post">
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
