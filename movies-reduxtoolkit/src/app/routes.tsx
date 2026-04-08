import { createBrowserRouter } from 'react-router-dom';
import MovieDisplay from '../components/MovieDisplay.tsx';
import MovieDetail from '../components/MovieDetail.tsx';
import Favorites from '../components/Favorites.tsx'
import App from '../App.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/", 
        element: <MovieDisplay />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/favorites",
        element: <Favorites />
      }
    
      
    ],
  },
]);

export default router;