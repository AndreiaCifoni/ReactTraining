import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch} type="submit">
        Go
      </button>
    </div>
  );
};

export default Search;
