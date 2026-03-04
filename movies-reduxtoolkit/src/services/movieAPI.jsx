import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const movieAPI = createApi({
  reducerPath: 'movieAPI', // Unique name for the store
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    // This is our dynamic endpoint!
    getMovies: builder.query({
      query: (category) => {
    if (category === 'upcoming') {
      return `movie/upcoming?api_key=${API_KEY}&region=DK`; 
    }
    return `movie/${category}?api_key=${API_KEY}`;
  },
      transformResponse: (response) => response.results,
    }),
    // 2. Get by Search Term
    getMovieSearch: builder.query({
      query: (searchTerm) => `search/movie?api_key=${API_KEY}&query=${searchTerm}`,
      transformResponse: (response) => response.results,
    }),

    // 3. Get a Single Movie's Details (using an ID)
    getMovieDetails: builder.query({
      query: (movieId) => `movie/${movieId}?api_key=${API_KEY}`,
    }), 


  }),
});

// RTK Query auto-generates a hook based on the endpoint name an example: useGetMoviesQuery for the 'getMovies' endpoint we defined above with the builder.query() method. We can export these hooks for use in functional components:
export const { useGetMoviesQuery, useGetMovieSearchQuery, useGetMovieDetailsQuery } = movieAPI;

export default movieAPI;