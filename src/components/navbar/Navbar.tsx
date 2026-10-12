import { NavLink } from "react-router";
import style from "./Navbar.module.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Login from "../../views/login/Login";
import Register from "../../views/register/Register";
import ConfirmLogout from "../confirmLogout/ConfirmLogout";
import LogWorkoutForm from "../logWorkoutForm/LogWorkoutForm";

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
                {context.isLoggedIn ? (
                    <>
                        <ConfirmLogout
                            button={{
                                className: style.logoutBtn,
                                content: "Logout",
                            }}
                        />
                        <LogWorkoutForm
                            button={{
                                className: style.logWorkoutBtn,
                                content: "+ Log",
                            }}
                        />
                    </>
                ) : (
                    <>
                        <Login
                            button={{
                                className: style.loginBtn,
                                content: "Log in",
                            }}
                        />
                        <Register
                            button={{
                                className: style.registerBtn,
                                content: "Create Account",
                            }}
                        />
                    </>
                )}
            </div>
        </nav>
    );
}
