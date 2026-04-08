export interface Movie {
  id: number;
  title: string;
  tagline?: string;
  overview: string;
  poster_path?: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  runtime?: number;
  status?: string;
  genres?: { id: number; name: string }[];
  original_language?: string;
}



export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}