import { useState } from "react";
import { CustomersList } from "../../components/CustomersList/CustomersList";
import { CustomerTable } from "../../components/CustomersTable/CustomerTable";
import { useMediaQuery } from "react-responsive";
import { LogoTitle } from "../../components/LogoTitle/LogoTitle";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Pagination } from "../../components/Pagination/Pagination";
import people from "../../data/people.json";
import styles from "./CustomerPage.module.css";

export const CustomersPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const [items, setItems] = useState(people);
  const [page, setPage] = useState(1);
  const [setSearch] = useState("");

  const itemPerPage = isMobile ? 4 : 8;

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
      : people;

    setItems(filtered);
    setPage(1);
  };

  return (
    <div className={styles.customers__wrapper}>
      <LogoTitle />
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
        {isMobile ? (
          <CustomersList currentItems={currentItems} />
        ) : (
          <CustomerTable currentItems={currentItems} />
        )}
        <div className={styles.customers__pagination__wrapper}>
          {items.length === 0 ? (
            <span className={styles.customer__not__found}>no match</span>
          ) : (
            <span className={styles.customer__entries}>
              Showing data 1 to 8 of {items.length} entries
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
