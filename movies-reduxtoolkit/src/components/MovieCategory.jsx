function MovieCategory({ category, setCategory, setSearchTerm }) {
  const categories = ['popular', 'top_rated', 'upcoming'];

  return (
    <div className="flex  gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setCategory(cat);
            setSearchTerm(''); // Nulstil søgning når man skifter kategori
          }}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            category === cat
              ? 'bg-blue-600 text-white shadow-md scale-105'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {cat.replace('_', ' ').toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default MovieCategory;