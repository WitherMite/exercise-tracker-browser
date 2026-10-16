import style from "./Navbar.module.css";
import { NavLink } from "react-router";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Login from "../../views/login/Login";
import Register from "../../views/register/Register";
import Logout from "../../views/logout/Logout";
import LogWorkoutForm from "../logWorkoutForm/LogWorkoutForm";
import GlobalModal from "../globalModal/GlobalModal";

const links = [
    {
        path: "/",
        childNode: "Landing",
    },
    {
        path: "/home",
        childNode: "Dashboard",
    },
    {
        path: "/profile",
        childNode: "Profile",
    },
    {
        path: "/exercises",
        childNode: "Exercises",
    },
] as const;

export default function Navbar() {
    // should be fine to use index as key here, since we control the array, and can ensure it wont change after building
    const linkElements: ReadonlyArray<React.JSX.Element> = links.map(
        (link, i) => (
            <li key={i}>
                <NavLink to={link.path} className={style.navLink}>
                    {link.childNode}
                </NavLink>
            </li>
        ),
    );

    const context = useContext(AppContext);

    return (
        <nav className={style.navTrack}>
            <ul className={style.navBar}>{linkElements}</ul>
            <div className={style.authControls}>
                {/* modals get keys to prevent redirecting in thier form actions from keeping the new dialog element open */}
                {context.isLoggedIn ? (
                    <>
                        <GlobalModal
                            key={0}
                            button={{
                                className: style.logoutBtn,
                                content: "Logout",
                            }}
                        >
                            <Logout />
                        </GlobalModal>
                        <GlobalModal
                            key={1}
                            button={{
                                className: style.logWorkoutBtn,
                                content: "+ Log",
                            }}
                        >
                            <LogWorkoutForm />
                        </GlobalModal>
                    </>
                ) : (
                    <>
                        <GlobalModal
                            key={2}
                            button={{
                                className: style.loginBtn,
                                content: "Log in",
                            }}
                        >
                            <Login />
                        </GlobalModal>
                        <GlobalModal
                            key={3}
                            button={{
                                className: style.registerBtn,
                                content: "Create Account",
                            }}
                        >
                            <Register />
                        </GlobalModal>
                    </>
                )}
            </div>
        </nav>
    );
}
