import { useParams, useNavigate } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../services/movieAPI';

export interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  status: string;
  genres: { id: number; name: string }[];
}

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: movie, isLoading, isError } = useGetMovieDetailsQuery(id);

  if (isLoading) return <div className="flex justify-center p-20 text-blue-500 font-bold">Henter biografen...</div>;
  if (isError) return <div className="text-red-500 p-20 text-center">Filmen kunne ikke findes.</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white animate-fadeIn">
      <div className="max-w-7xl mx-auto p-6">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-6 group"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span> Tilbage
        </button>

        {/* 2. MAIN CONTENT GRID */}
        <div className="flex flex-col lg:flex-row gap-12 bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
          
          {/* VENSTRE: Poster */}
          <div className="lg:w-1/3 shrink-0">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>

          {/* HØJRE: Info */}
          <div className="flex-1 p-8 lg:p-12">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {movie.title}
              </h1>
              <div className="bg-yellow-500/10 border border-yellow-500/50 px-4 py-2 rounded-xl text-yellow-500 font-bold">
                ⭐ {movie.vote_average.toFixed(1)}
              </div>
            </div>

            <p className="text-xl italic text-gray-400 mb-8">"{movie.tagline || 'En uforglemmelig filmoplevelse'}"</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 text-sm">
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <p className="text-gray-500 uppercase font-bold text-xs mb-1">Status</p>
                <p>{movie.status}</p>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <p className="text-gray-500 uppercase font-bold text-xs mb-1">Længde</p>
                <p>{movie.runtime} min.</p>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <p className="text-gray-500 uppercase font-bold text-xs mb-1">Sprog</p>
                <p className="uppercase">{movie.original_language}</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">Handling</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.overview || "Ingen beskrivelse tilgængelig."}
              </p>
            </div>

            {/* GENRES */}
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre: { id: number; name: string }) => (
                <span key={genre.id} className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-4 py-1 rounded-full text-sm font-medium">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;