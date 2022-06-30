import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const onSearch = () => {
    // action to search term

    setSearch("");
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Go</button>
    </div>
  );
};

export default Search;
