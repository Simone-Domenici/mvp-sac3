import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <nav className={style.navbar}>
                <NavLink to="/"><img className="logo" src="src\img\duck-logo.png" alt="" /></NavLink>
                <ul className="d-flex align-center">
                    <li className="mr-2">
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}