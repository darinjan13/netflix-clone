import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrending = createAsyncThunk('trending/fetchTrending', async () => {
    const { data: { results } } = await axios.get(`${process.env.REACT_APP_API_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    return results;
})

const initialState = {
    loading: null,
    movies: {},
}

const trendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        //Trending
        builder.addCase(fetchTrending.pending, (state) => {
            state.loading = "Pending";
        })
        .addCase(fetchTrending.fulfilled, (state, {payload}) => {
            state.loading = "Fulfilled"
            state.movies = payload;
        })
        .addCase(fetchTrending.rejected, (state) => {
            state.loading = "Rejected"
        })
    }
});

export const trendingActions = trendingSlice.actions;
export const getTrending = (state) => state.trending.movies;
export const getLoading = (state) => state.trending.loading;

export default trendingSlice.reducer;