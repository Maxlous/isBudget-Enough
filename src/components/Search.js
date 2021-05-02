import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import "../styles/Search.css";

const Search = React.memo(({ setKeyword }) => {
  const searchInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="d-inline-flex mb-3">
      <label htmlFor="search-input">
        <span className="visually-hidden">Search Expenses</span>
      </label>
      <input
        onChange={searchInput}
        id="search-input"
        className="rounded-pill"
        type="text"
        placeholder="Search expenses..."
      ></input>
      <div className="ml-2">
        <FaSearchDollar
          style={{ color: "white" }}
          size="1.4em"
        ></FaSearchDollar>
      </div>
    </div>
  );
});

export default Search;
