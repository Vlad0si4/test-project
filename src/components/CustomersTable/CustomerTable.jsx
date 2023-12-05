import { useState } from "react";
import peopleJSON from "../../data/people.json";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./CustomerTable.module.css";
import titleLogo from "../../assets/titleLogo.svg";

const categories = [
  { label: "Customer Name" },
  { label: "Company" },
  { label: "Phone Number" },
  { label: "Email" },
  { label: "Country" },
  { label: "Status" },
];

export const CustomerTable = () => {
  const [showPeople] = useState(8);

  return (
    <div className={styles.customers__wrapper}>
      <img
        className={styles.customers__logo}
        src={titleLogo}
        alt="title logo"
        width={176}
        height={36}
      />
      <div className={styles.customers__container}>
        <div className={styles.customers__container__title}>
          <div>
            <h2 className={styles.customers__title}>All Customers</h2>
            <p className={styles.customers__text}>Active Members</p>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <table className={styles.customers__table}>
          <thead className={styles.customers__categories}>
            {categories.map((el) => (
              <tr key={el.label}>
                <th>{el.label}</th>
              </tr>
            ))}
          </thead>
          <tbody className={styles.customers__list}>
            {peopleJSON.slice(0, showPeople).map((el) => (
              <tr className={styles.customer__item} key={el.phone}>
                {Object.values(el).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
