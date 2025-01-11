import React, { useEffect, useState } from "react";
import "./index.css";

const Pagination = ({ page, setPage, total, itemsPerPage }) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // TotalPages = total/itemsPerPage
    // ex- 55/10 -> 5.5 -> 6
    setTotalPages(
      total % itemsPerPage
        ? Math.floor(total / itemsPerPage + 1)
        : Math.floor(total / itemsPerPage)
    );
  }, [total]);

  const onNextPageHandler = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const onPrevPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onPageChange = (pageNo) => {
    setPage(pageNo);
  };
  return (
    <div className="pagination-container">
      {/* Pre Button*/}
      {page !== 1 && (
        <button className="btn" onClick={onPrevPageHandler}>
          {"<"}
        </button>
      )}

      {Array(totalPages)
        .fill(0)
        .map((_, ind) => {
          return (
            <button
              className="btn"
              key={ind}
              onClick={() => onPageChange(ind + 1)}
              style={ind + 1 === page ? { backgroundColor: "grey" } : {}}
            >
              {ind + 1}
            </button>
          );
        })}

      {/* Next Button*/}
      {page !== totalPages && (
        <button className="btn" onClick={onNextPageHandler}>
          {">"}
        </button>
      )}
    </div>
  );
};

export default Pagination;
