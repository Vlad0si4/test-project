import PropTypes from "prop-types";
import styles from "./CustomerCard.module.css";

export const CustomerCard = ({ customer, category, isActive }) => {
  return (
    <li className={styles.customer__item}>
      <span>{category.label}</span>

      <span
        className={`${
          isActive
            ? customer.status === "Active"
              ? styles.active
              : styles.inactive
            : ""
        } `}
      >
        {customer[category.key]}
      </span>
    </li>
  );
};

CustomerCard.propTypes = {
  customer: PropTypes.object,
  category: PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  }),
  isActive: PropTypes.bool,
};
