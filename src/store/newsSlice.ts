import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
  },
  reducers: {
    saveNewsAction: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { saveNewsAction } = newsSlice.actions;
export default newsSlice.reducer;
