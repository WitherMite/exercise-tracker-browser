import { Link } from "react-router";
import style from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={style.navTrack}>
            <ul className={style.navBar}>
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li>
                    <Link to="/home">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
}
