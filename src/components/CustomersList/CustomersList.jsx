import PropTypes from "prop-types";
import { CustomerCard } from "../CustomerCard/CustomerCard";
import { categories } from "../../data/categories";

import styles from "./CustomerList.module.css";

export const CustomersList = ({ currentItems }) => {
  return (
    <ul className={styles.customer__wrapper}>
      {currentItems.map((el) => (
        <li key={el.phone} className={styles.customer__item}>
          <ul className={styles.customer__list}>
            {categories.map((item, idx) => (
              <CustomerCard
                key={item.key}
                customer={el}
                category={item}
                isActive={idx === categories.length - 1}
              />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

CustomersList.propTypes = {
  currentItems: PropTypes.arrayOf(PropTypes.object),
};
