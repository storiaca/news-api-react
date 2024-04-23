import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './newsSlice';

const store = configureStore({
  reducer: {
    newsStore: newsSlice,
  },
});

export default store;
