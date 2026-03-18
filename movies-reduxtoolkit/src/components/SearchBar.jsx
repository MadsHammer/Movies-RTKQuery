function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex ">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 w-full max-w-md focus:border-blue-500 outline-none"
      />
    </div>
  );
}

export default SearchBar;