interface MovieCategoryProps {
  category: string;
  setCategory: (cat: string) => void;
  setSearchTerm: (term: string) => void;
}

function MovieCategory({ category, setCategory, setSearchTerm }: MovieCategoryProps) {
  const categories = ["popular", "top_rated", "upcoming"] as const;

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setCategory(cat);
            setSearchTerm("");
          }}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            category === cat
              ? "bg-blue-600 text-white shadow-md scale-105"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {cat.replace("_", " ").toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default MovieCategory;
