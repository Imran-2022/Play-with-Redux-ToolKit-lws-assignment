require('util').inspect.defaultOptions.depth = null;

const store = require('./rtk/app/store');
const { fetchVideos } = require('./rtk/features/videos/relatedVideosSlice');
const { fetchVideo } = require('./rtk/features/videos/videoSlice');

store.dispatch(fetchVideo());
