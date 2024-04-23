import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type NewsState = {
  news: NewsArticleType[];
};

const initialState: NewsState = {
  news: [],
};
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    saveNewsAction: (state, action: PayloadAction<NewsArticleType>) => {
      state.news = action.payload;
    },
  },
});

export const { saveNewsAction } = newsSlice.actions;
export default newsSlice.reducer;
