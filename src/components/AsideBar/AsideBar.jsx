import { NavLink } from "react-router-dom";
import styles from "./AsideBar.module.css";
import logo from "../../assets/logo.svg";

const navLinks = [
  { label: "Dashboard", path: "/" },
  { label: "Product", path: "/product" },
  { label: "Customers", path: "/customers" },
  { label: "Income", path: "/income" },
  { label: "Promote", path: "/promote" },
  { label: "Help", path: "/help" },
];

export const AsideBar = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} width={37} height={37} />
      <ul>
        {navLinks.map((el) => (
          <li key={el.label}>
            <NavLink to={el.path}>{el.label}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
