import { useState } from "react";

function search({ handleSearch, handleLogout }) {
  const [search, setSearch] = useState("");
  const searching = () => {
    handleSearch(search);
  };
  return (
    <div>
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
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}
export default search;
