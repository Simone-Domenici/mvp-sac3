import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <nav className={style.navbar}>
                <NavLink to="/">Logo</NavLink>
                <ul>
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}