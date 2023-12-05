import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <NavLink to="/" className={styles.aside__wrapper}>
      <img
        className={styles.aside__logo}
        src={logo}
        width={37}
        height={37}
        alt="logo"
      />
      <p className={styles.aside__logo__title}>Dashboard</p>
      <sub className={styles.aside__logo__article}>v.01</sub>
    </NavLink>
  );
};