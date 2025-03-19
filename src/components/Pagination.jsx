import React from "react";
import { NavLink } from "react-router";

function Pagination({ currentPage, totalPages, next, prev, gotoPage }) {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <NavLink
            className="page-link"
            to="#"
            onClick={() => prev()}
          >
            Previous
          </NavLink>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <NavLink
              className="page-link"
              to="#"
              onClick={() => gotoPage(page)}
            >
              {page}
            </NavLink>
          </li>
        ))}
        <li className="page-item">
          <NavLink
            className="page-link"
            to="#"
            onClick={() => next()}
          >
            Next
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
