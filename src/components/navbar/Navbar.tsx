import { NavLink } from "react-router";
import style from "./Navbar.module.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

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
            {context.isLoggedIn ? (
                <>
                    <NavLink className={style.logoutBtn} to="/logout">
                        Logout
                    </NavLink>
                    <NavLink
                        className={style.logExerciseBtn}
                        to="/log-exercise"
                    >
                        + Log
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink className={style.loginBtn} to="/login">
                        Log in
                    </NavLink>
                    <NavLink className={style.registerBtn} to="/register">
                        Create Account
                    </NavLink>
                </>
            )}
        </nav>
    );
}
