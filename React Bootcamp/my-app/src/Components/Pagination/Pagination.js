import React, { useState } from "react";
import "./pagination.css";

function Pagination({ dispatch, state, setCurrentPage }) {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <div className="pagination">
        <button onClick={() => dispatch({ type: "decrement" })}>&laquo;</button>
        {generateButtons(
          state.count,
          dispatch,
          pageNumber,
          setPageNumber,
          setCurrentPage
        )}
        <button onClick={() => dispatch({ type: "increment" })}>&raquo;</button>
      </div>
    </div>
  );
}

const generateButtons = (
  state,
  dispatch,
  pageNumber,
  setPageNumber,
  setCurrentPage
) => {
  let arr = [];
  for (let index = state; index < state + 6; index++) {
    arr.push(
      <button
        key={index}
        className={pageNumber == index ? "active" : ""}
        onClick={() => {
          setCurrentPage(index);
          setPageNumber(index);
          return dispatch({ type: index });
        }}
      >
        {index}
      </button>
    );
  }
  return arr;
};

export default Pagination;
