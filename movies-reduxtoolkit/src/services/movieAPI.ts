import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie, MovieResponse } from '../types/movie';

// Using your environment variable
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const movieAPI = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    
    getMovies: builder.query<MovieResponse, string>({
      query: (category) => `movie/${category}?api_key=${API_KEY}`,
    }),
    
    getMovieSearch: builder.query<MovieResponse, string>({
      query: (searchTerm) => `search/movie?query=${searchTerm}&api_key=${API_KEY}`,
    }),

    getMovieDetails: builder.query<Movie, string | undefined>({
      // We add a check to make sure ID exists before trying to fetch
      query: (id) => `movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const { 
  useGetMoviesQuery, 
  useGetMovieSearchQuery, 
  useGetMovieDetailsQuery 
} = movieAPI;