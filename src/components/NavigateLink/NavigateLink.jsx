import { NavLink } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import styles from "./NavLink.module.css";
import { useMediaQuery } from "react-responsive";

const navLinks = [
  { label: "Dashboard" },
  { label: "Product" },
  { label: "Customers" },
  { label: "Income" },
  { label: "Promote" },
  { label: "Help" },
];
export const NavigateLink = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <>
      {!isMobile ? (
        <ul className={styles.aside__list}>
          {navLinks.map((el) => (
            <li className={styles.aside__item} key={el.label}>
              <NavLink
                className={styles.aside__link}
                to={
                  el.label === "Dashboard" ? "/" : `/${el.label.toLowerCase()}`
                }
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
      ) : (
        <ul className={styles.aside__list}>
          {navLinks.map((el) => (
            <li className={styles.aside__item} key={el.label}>
              <NavLink
                className={styles.aside__link}
                to={
                  el.label === "Dashboard" ? "/" : `/${el.label.toLowerCase()}`
                }
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
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
