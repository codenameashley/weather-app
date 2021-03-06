import React from "react";
import propTypes from "prop-types";

import "../styles/SearchForm.css";

export default function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={searchText}
        placeholder="Search for a town or city"
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
}

SearchForm.propTypes = {
  searchText: propTypes.string.isRequired,
  setSearchText: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};
