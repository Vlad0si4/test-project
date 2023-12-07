import { useState } from "react";
import PropTypes from "prop-types";
import sprite from "../../assets/sprite.svg";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ itemsSearch }) => {
  const [search, setSearch] = useState("");

  const handleChangeInput = (event) => {
    const newSearchValue = event.target.value;
    setSearch(newSearchValue);
    itemsSearch(newSearchValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.input__wrapper} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={search}
        onChange={handleChangeInput}
      />
      <button className={styles.button}>
        <svg className={styles.svg}>
          <use href={sprite + "#search"}></use>
        </svg>
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  itemsSearch: PropTypes.func,
};
