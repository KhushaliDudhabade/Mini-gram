import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from './api';

export const fetchPostsThunk = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetchPosts();
  return response;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
