import sprite from "../../assets/sprite.svg";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <form className={styles.input__wrapper}>
      <input className={styles.input} placeholder="Search" />
      <button className={styles.button}>
        <svg className={styles.svg}>
          <use href={sprite + "#search"}></use>
        </svg>
      </button>
    </form>
  );
};
