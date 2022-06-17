import React, { useState } from "react";
import Search from "./Search";

const names = [
  "Andreia",
  "Lucas",
  "Mike",
  "Lara",
  "Marcos",
  "Alice",
  "Anthony",
  "Madalena",
  "James",
];

const App = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredNames = () => {
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredNames = getFilteredNames();

  return (
    <div>
      <Search search={search} onChangeHandler={onChangeHandler} />
      <div>
        {filteredNames.map((filteredName) => (
          <li>{filteredName}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
