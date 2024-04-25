import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type NewsState = {
  news: NewsArticleType[];
  searchTerm?: string;
};

const initialState: NewsState = {
  news: [],
  searchTerm: '',
};
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    saveNewsAction: (state, action: PayloadAction<NewsArticleType[]>) => {
      state.news = action.payload;
    },
    searchTermAction: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { saveNewsAction, searchTermAction } = newsSlice.actions;
export default newsSlice.reducer;
