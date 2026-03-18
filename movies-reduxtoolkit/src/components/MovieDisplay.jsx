import { useState } from 'react';
import { useGetMovieSearchQuery, useGetMoviesQuery } from '../services/movieAPI';

import { MovieCard, SearchBar, MovieCategory } from '../components'

function MovieDisplay() {
  const [category, setCategory] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: catData, isLoading: catLoading, isError: catError} = useGetMoviesQuery(category);
  
  const { data: searchData, isFetching: searchLoading, isError: searchError } = useGetMovieSearchQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });

  if (catLoading) return <div className="flex justify-center p-10 text-xl font-bold">Loading...</div>;
  if (catError) return <div className="text-red-500 p-10">Something went wrong!</div>;
 
const isSearching = searchTerm.length >= 3;
const movies = isSearching ? searchData : catData;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <nav className="flex gap-4 mb-8 bg-gray-800 p-4 rounded-lg shadow-lg justify-center">
        <div className="w-full">
        <MovieCategory 
            category={category} 
            setCategory={setCategory} 
            setSearchTerm={setSearchTerm} 
        />
        </div>

        <div className=''>
        <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            
        />
        </div>
      </nav>
       
       

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies?.results?.filter(movie => movie.poster_path !== null).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>


    </div>
  );
}

export default MovieDisplay;