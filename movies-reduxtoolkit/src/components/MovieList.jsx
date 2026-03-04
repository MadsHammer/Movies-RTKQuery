import { useState } from 'react';
import { useGetMoviesQuery } from '../services/movieAPI';

function MovieDisplay() {
  const [category, setCategory] = useState('popular');
  const { data: movies, isLoading, error } = useGetMoviesQuery(category);

  if (isLoading) return <div className="flex justify-center p-10 text-xl font-bold">Loading...</div>;
  if (error) return <div className="text-red-500 p-10">Something went wrong!</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <nav className="flex gap-4 mb-8 bg-gray-800 p-4 rounded-lg shadow-lg justify-center">
        {['popular', 'top_rated', 'upcoming'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              category === cat 
                ? 'bg-blue-600 text-white shadow-md scale-105' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {cat.replace('_', ' ').toUpperCase()}
          </button>
        ))}
      </nav>
       
       

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies?.map((movie) => (
          <div 
            key={movie.id} 
            className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative aspect-[2/3]">
              <img 
                src={movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                  : 'https://via.placeholder.com/500x750?text=No+Poster'} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-yellow-400 font-bold text-xs shadow-md border border-yellow-400/30">
                {movie.vote_average.toFixed(1)}
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-bold text-sm truncate mb-1 group-hover:text-blue-400 transition-colors">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium italic">
                {movie.release_date ? movie.release_date.split('-')[0] : 'TBA'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDisplay;