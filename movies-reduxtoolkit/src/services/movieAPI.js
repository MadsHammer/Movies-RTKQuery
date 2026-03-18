import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const movieAPI = createApi({
  reducerPath: 'movieAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (category) => ({
        url: category === 'upcoming' ? 'movie/upcoming' : `movie/${category}`,
        params: { 
          api_key: API_KEY,
          region: category === 'upcoming' ? 'DK' : undefined 
        },
      }),
    }),

    getMovieSearch: builder.query({
      query: (searchTerm) => ({
        url: 'search/movie',
        params: { api_key: API_KEY, query: searchTerm },
      }),
    }),

    getMovieDetails: builder.query({
      query: (movieId) => ({
        url: `movie/${movieId}`,
        params: { api_key: API_KEY },
      }),
    }), 
  }),
});

// RTK Query auto-generates a hook based on the endpoint name an example: useGetMoviesQuery for the 'getMovies' endpoint we defined above with the builder.query() method. We can export these hooks for use in functional components:
export const { useGetMoviesQuery, useGetMovieSearchQuery, useGetMovieDetailsQuery } = movieAPI;

export default movieAPI;