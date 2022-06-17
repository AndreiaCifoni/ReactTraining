import React from "react";

const Search = ({ search, onChangeHandler }) => {
  return (
    <form>
      <div>
        <h1>Seach a name:</h1>
        <input type="text" value={search} onChange={onChangeHandler} />
      </div>
    </form>
  );
};

export default Search;
