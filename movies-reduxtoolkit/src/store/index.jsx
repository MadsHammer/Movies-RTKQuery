import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../services/movieAPI";
export const store = configureStore({
  reducer: {
    // We use the dynamic 'reducerPath' we defined in the service (usually 'movieApi')
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  // This middleware handles the "magic" (caching, invalidation, etc.)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});

export default store;