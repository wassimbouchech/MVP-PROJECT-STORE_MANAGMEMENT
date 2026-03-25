function search({ handleSearch }) {
  return (
    <input
      type="text"
      placeholder="search for your Product"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
export default search
