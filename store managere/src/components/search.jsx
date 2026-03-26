import { useState } from "react";

function search({ handleSearch }) {
  const [search, setSearch] = useState("");
  const searching = () => {
    handleSearch(search);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="search for your Product"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <button type="button" onClick={searching}>
        Search
      </button>

    </div>
  );
}
export default search;
