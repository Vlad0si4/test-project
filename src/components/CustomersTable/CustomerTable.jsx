import { useState } from "react";
import { Pagination } from "../paginatioin/Pagination";
import { SearchBar } from "../SearchBar/SearchBar";
import { useMediaQuery } from "react-responsive";

import titleLogo from "../../assets/titleLogo.svg";
import peopleJSON from "../../data/people.json";
import styles from "./CustomerTable.module.css";

const categories = [
  { label: "Customer Name" },
  { label: "Company" },
  { label: "Phone Number" },
  { label: "Email" },
  { label: "Country" },
  { label: "Status" },
];

export const CustomerTable = () => {
  const [items, setItems] = useState(peopleJSON);
  const [page, setPage] = useState(1);
  const [itemPerPage] = useState(8);
  const [search, setSearch] = useState("");



 

  const indexOfLastItem = page * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  const handleSearch = (filterData) => {
    setSearch(filterData);

    const filtered = filterData
      ? items.filter((el) =>
          el.name.toLowerCase().includes(filterData.toLowerCase())
        )
      : peopleJSON;

    setItems(filtered);
    setPage(1);
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
            <SearchBar itemsSearch={handleSearch} />
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
        <div className={styles.customers__pagination__wrapper}>
          {items.length === 0 ? (
            <span>no match</span>
          ) : (
            <span className={styles.customer__entries}>
              Showing data 1 to 8 of {items.length}K entries
            </span>
          )}

          <Pagination
            onPageChange={handlePageChange}
            totalItems={items.length}
            currentPage={page}
            perPage={itemPerPage}
          />
        </div>
      </div>
    </div>
  );
};
