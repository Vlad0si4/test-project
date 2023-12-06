import { NavLink } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import styles from "./NavLink.module.css";

const navLinks = [
  { label: "Dashboard" },
  { label: "Product" },
  { label: "Customers" },
  { label: "Income" },
  { label: "Promote" },
  { label: "Help" },
];
export const NavigateLink = () => {
  return (
    <>
      <ul className={styles.aside__list}>
        {navLinks.map((el) => (
          <li className={styles.aside__item} key={el.label}>
            <NavLink
              className={styles.aside__link}
              to={el.label === "Dashboard" ? "/" : `/${el.label.toLowerCase()}`}
            >
              <div className={styles.aside__link__wrapper}>
                <svg
                  width={24}
                  height={24}
                  className={`${styles.aside__svg} ${
                    (el.label === "Customers" ||
                      el.label === "Income" ||
                      el.label === "Dashboard") &&
                    styles.aside__svg__withfill
                  }`}
                >
                  <use href={sprite + `#${el.label}`}></use>
                </svg>
                <span>{el.label}</span>
              </div>
              <svg width={16} height={16} className={styles.aside__arrow}>
                <use href={sprite + "#arrow-right"}></use>
              </svg>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
