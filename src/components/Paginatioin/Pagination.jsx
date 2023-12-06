import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

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
        previousLabel="←"
        nextLabel="→"
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

// import styles from "./Pagination.module.css";

// export const Pagination = ({ pageCount, paginate }) => {
//   const pageNumber = [];
//   for (let i = 1; i <= pageCount; i++) {
//     pageNumber.push(i);
//   }

//   return (
//     <div>
//       <ul className={styles.pagination__list}>
//         {pageNumber.map((number) => (
//           <li key={number}>
//             <a href="#" onClick={() => paginate(number)}>
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
