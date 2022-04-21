import React from "react";

function Navigation({ orderChange, orderRef, movieChange, setPerPage }) {
  return (
    <div>
      <nav>
        <select
          name="order"
          id="order"
          ref={orderRef}
          onChange={(e) => orderChange(e)}
        >
          <option value={0}>A-Z</option>
          <option value={1}>Z-A</option>
        </select>
        <select
          name="numberOfMovies"
          id="numberOfMovies"
          onChange={(e) => setPerPage(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <input
          type="search"
          placeholder="Search Movie..."
          onChange={(e) => movieChange(e)}
        ></input>
      </nav>
    </div>
  );
}

export default Navigation;
