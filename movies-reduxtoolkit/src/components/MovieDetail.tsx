import { useParams, useNavigate } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../services/movieAPI';
import { ArrowLeft, Star, Clock, Globe, Activity } from 'lucide-react';

function MovieDetail() {
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();
  
  const { data: movie, isLoading, isError } = useGetMovieDetailsQuery(id);

  if (isLoading) return <div className="flex justify-center p-20 text-blue-500 font-bold">Henter biografen...</div>;
  if (isError || !movie) return <div className="text-red-500 p-20 text-center">Filmen kunne ikke findes.</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white animate-fadeIn">
      <div className="max-w-7xl mx-auto p-6">
        {/* Tilbage-knap med ArrowLeft ikon */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all mb-6 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Tilbage
        </button>

        <div className="flex flex-col lg:flex-row gap-12 bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
          
          <div className="lg:w-1/3 shrink-0">
            <img 
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750'} 
              alt={movie.title} 
              className="w-full h-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1 p-8 lg:p-12">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {movie.title}
              </h1>
              {/* Rating med Star ikon */}
              <div className="flex items-center bg-yellow-500/10 border border-yellow-500/50 px-4 py-2 rounded-xl text-yellow-500 font-bold">
                <Star size={14} fill="currentColor" className="mr-1" />
                {movie.vote_average.toFixed(1)}
              </div>
            </div>

            <p className="text-xl italic text-gray-400 mb-8">"{movie.tagline || 'En uforglemmelig filmoplevelse'}"</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 text-sm">
              <div className="bg-gray-700/50 p-3 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 uppercase font-bold text-xs">
                  <Activity size={14} /> Status
                </div>
                <p>{movie.status}</p>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 uppercase font-bold text-xs">
                  <Clock size={14} /> Længde
                </div>
                <p>{movie.runtime} min.</p>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg flex flex-col gap-1">
                <div className="flex items-center gap-2 text-gray-500 uppercase font-bold text-xs">
                  <Globe size={14} /> Sprog
                </div>
                <p className="uppercase">{movie.original_language || 'en'}</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-3 border-b border-gray-700 pb-2">Handling</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.overview || "Ingen beskrivelse tilgængelig."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
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