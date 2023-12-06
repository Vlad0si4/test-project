import { useState } from "react";
import peopleJSON from "../../data/people.json";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./CustomerTable.module.css";
import titleLogo from "../../assets/titleLogo.svg";
// import { PaginatedItems } from "../Paginatioin/Pagination";
import { Pagination } from "../paginatioin/Pagination";

const categories = [
  { label: "Customer Name" },
  { label: "Company" },
  { label: "Phone Number" },
  { label: "Email" },
  { label: "Country" },
  { label: "Status" },
];

export const CustomerTable = () => {
  const [items] = useState(peopleJSON);
  const [page, setPage] = useState(1);
  const [itemPerPage] = useState(8);

  const indexOfLastItem = page * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

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
          <thead className={styles.customers__head}>
            <tr className={styles.customers__label}>
              {categories.map((el) => (
                <th
                  key={el.label}
                  className={styles.customers__categories__text}
                >
                  {el.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.customers__body}>
            {currentItems.map((el) => (
              <tr className={styles.customers__list} key={el.phone}>
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
                    {" "}
                    {el.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          onPageChange={handlePageChange}
          totalItems={items.length}
          currentPage={page}
          perPage={itemPerPage}

          // pageCount={Math.ceil(items.length / itemPerPage)}
          // paginate={paginate}
        />
        <span className={styles.customer__entries}>
          Showing data 1 to 8 of {items.length}K entries
        </span>
      </div>
    </div>
  );
};
