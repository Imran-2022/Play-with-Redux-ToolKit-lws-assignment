const {configureStore} = require("@reduxjs/toolkit");
const relatedVideosSlice = require("../features/videos/relatedVideosSlice")
const { createLogger } = require("redux-logger");

const logger = createLogger();
// configure store
const store = configureStore({
    reducer: {
        relatedVideos: relatedVideosSlice,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(logger),
});

module.exports = store;
