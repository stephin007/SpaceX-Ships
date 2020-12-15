import React from "react";

const SearchBar = ({ totalCount, input, onChange }) => {
  return (
    <div className="container">
      <form className="search">
        <input
          type="text"
          value={input}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search ships..."
          name="search"
        />
      </form>
      <p className="total-count">TOTAL COUNT : {totalCount}</p>
    </div>
  );
};

export default SearchBar;
