import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <nav className={s.container}>
        <ul className={s.list}>
          <NavLink
            to='/'
            exact
            className={s.item}
            activeClassName={s.activeItem}>
            Home
          </NavLink>
          <NavLink
            to='/movies'
            className={s.item}
            activeClassName={s.activeItem}>
            Movies
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
