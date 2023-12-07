import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

export const Pagination = ({
  onPageChange,
  totalItems,
  currentPage,
  perPage,
}) => {
  const pageCount = Math.ceil(totalItems / perPage);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;

    onPageChange(selectedPage);
  };

  if (totalItems <= perPage) {
    return null;
  }

  return (
    <div className={styles.pagination__wrapper}>
      <ReactPaginate
        breakLabel={"..."}
        onPageChange={handlePageClick}
        forcePage={currentPage - 1}
        pageCount={pageCount}
        previousLabel="&#60;"
        nextLabel="&#62;"
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        renderOnZeroPageCount={null}
        activeClassName="activePagination"
        activeLinkClassName="activePagination"
        previousClassName={currentPage === 0 ? "previous disabled" : "previous"}
        nextClassName={currentPage === pageCount ? "next disabled" : "next"}
      />
    </div>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number,
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  onPageChange: PropTypes.func,
};
