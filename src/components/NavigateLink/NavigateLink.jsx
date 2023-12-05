import { useState } from "react";
import { NavLink } from "react-router-dom";
import sprite2 from "../../assets/sprite.svg";
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
  const [isActive, setIsActive] = useState("");

  const handleChange = (label) => {
    setIsActive(label);
  };
  return (
    <>
      <ul className={styles.aside__list}>
        {navLinks.map((el) => (
          <li className={styles.aside__item} key={el.label}>
            <NavLink
              className={`${styles.aside__link} ${
                isActive === el.label && styles.active
              }`}
              onClick={() => handleChange(el.label)}
              to={`/${el.label.toLowerCase()}`}
            >
              <svg className={styles.aside__svg}>
                <use
                  href={sprite2 + `#${el.label}`}
                  width={24}
                  height={24}
                ></use>
              </svg>
              {el.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
