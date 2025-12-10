function SearchBar({ setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search stocks..."
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
