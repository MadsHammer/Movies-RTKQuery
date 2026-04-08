import { Link } from 'react-router-dom';
import { Movie } from '../types/movie';
import { Star } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movie/${movie.id}`} className="block h-full no-underline">
      <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <div className="relative aspect-[2/3]">
          <img 
            src={movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
              : 'https://via.placeholder.com/500x750?text=No+Poster'} 
            alt={movie.title} 
            className="w-full h-full object-cover"
          />

          
          <div className="flex items-center absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-yellow-400 font-bold text-xs shadow-md border border-yellow-400/30">
                            <Star size={12} fill="currentColor" className="mr-1" />
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
    </Link>
  );
}

export default MovieCard;