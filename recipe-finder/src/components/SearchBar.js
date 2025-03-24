// SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        className='search-input'
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;