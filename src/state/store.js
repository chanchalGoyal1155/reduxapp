import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers'; // Make sure this exports an object with reducers

export const store = configureStore({
  reducer: reducers, // This should be an object containing your reducers
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Default middleware already includes thunk
});
