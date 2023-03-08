const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const { sortByView } = require("./helpers/sortByView");

// initial state
const initialState = {
    loading: false,
    relatedVideos: [],
    error: "",
};

// create async thunk

const fetchVideos = createAsyncThunk("video/fetchVideos", async (tags) => {
    const urlQuery= tags.map((value) => `tags_like=${value}`).join('&');
    const response = await fetch(`http://localhost:9000/videos?${urlQuery}`);
    const posts = await response.json();
    return posts;
});

const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(fetchVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.relatedVideos = sortByView(action.payload);
        });

        builder.addCase(fetchVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.relatedVideos = [];
        });
    },
});

module.exports = relatedVideosSlice.reducer;
module.exports.fetchVideos = fetchVideos;
