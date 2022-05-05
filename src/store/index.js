import { configureStore } from '@reduxjs/toolkit';
import reducers from '@/reducers';

const store = configureStore({
  reducer: reducers,
  preloadedState: {},
});

export default store;
