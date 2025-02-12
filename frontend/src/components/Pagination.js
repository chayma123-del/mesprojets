import React from "react";


const Pagination = ({ prevPage, nextPage, currentPage, totalPages }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Précédent
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        className="pagination-btn"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;