interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void; // This is the type for a React state setter
}

// 2. Apply the interface to the function
function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="flex">
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