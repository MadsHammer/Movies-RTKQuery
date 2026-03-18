import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/store.jsx'; // Vi antager, at både store og router eksporteres herfra
import { router } from  './app/routes.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provider giver hele appen adgang til din Redux Store (RTK Query) */}
    <Provider store={store}>
      {/* RouterProvider sørger for, at URL'en styrer, hvad der vises i din Outlet */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);