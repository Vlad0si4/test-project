import { categories } from "../../data/categories";
import styles from "./CustomerTable.module.css";

export const CustomerTable = ({ currentItems }) => {
  return (
    <table className={styles.customers__table}>
      <thead className={styles.customers__head}>
        <tr className={styles.customers__label}>
          {categories.map((el) => (
            <th key={el.label} className={styles.customers__categories__text}>
              {el.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.customers__body}>
        {currentItems.map((el) => (
          <tr className={styles.customers__list} key={crypto.randomUUID()}>
            <td className={styles.customers__item}>{el.name}</td>
            <td className={styles.customers__item}>{el.company}</td>
            <td className={styles.customers__item}>{el.phone}</td>
            <td className={styles.customers__item}>{el.email}</td>
            <td className={styles.customers__item}>{el.country}</td>
            <td className={styles.customers__item}>
              <span
                className={`${styles.customers__span} ${
                  el.status === "Active" ? styles.active : styles.inactive
                }`}
              >
                {el.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
