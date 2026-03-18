import { createBrowserRouter } from 'react-router-dom';
import MovieDisplay from '../components/MovieDisplay';
import MovieDetail from '../components/MovieDetail.jsx';
import Favorites from '../components/Favorites.jsx'
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