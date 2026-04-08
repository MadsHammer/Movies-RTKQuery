import { useState } from "react";
import { useGetMovieSearchQuery, useGetMoviesQuery } from "../services/movieAPI";
import { MovieCard, SearchBar, MovieCategory } from "../components";

function MovieDisplay() {
  const [category, setCategory] = useState<string>("popular");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: catData,
    isLoading: catLoading,
    isError: catError,
  } = useGetMoviesQuery(category);

  const { data: searchData, isFetching: searchLoading } =
    useGetMovieSearchQuery(searchTerm, {
      skip: searchTerm.length < 3,
    });

  if (catLoading)
    return (
      <div className="flex justify-center p-10 text-xl font-bold">
        Loading...
      </div>
    );
  if (catError)
    return <div className="text-red-500 p-10">Something went wrong!</div>;

  const isSearching = searchTerm.length >= 3;
  const movies = isSearching ? searchData?.results : catData?.results;

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      <nav className="flex flex-col md:flex-row gap-4 mb-8 bg-gray-800 p-4 rounded-lg shadow-lg items-center justify-between">
        <div className="w-full md:w-auto flex justify-center">
          <MovieCategory
            category={category} 
            setCategory={setCategory}
            setSearchTerm={setSearchTerm}
          />
        </div>

        <div className="w-full md:max-w-md">
          <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} />
        </div>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies
          ?.filter((m) => m.poster_path !== null).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}

          {movies?.length === 0 && !searchLoading && (
           <p className="text-center w-full col-span-full py-10">Ingen film fundet...</p>
       )}
      </div>
    </div>
  );
}

export default MovieDisplay;
