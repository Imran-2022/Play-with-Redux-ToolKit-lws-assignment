require('util').inspect.defaultOptions.depth = null;

const store = require('./rtk/app/store');
const { fetchVideos } = require('./rtk/features/videos/relatedVideosSlice');
const { fetchVideo } = require('./rtk/features/videos/videoSlice');

// store.subscribe(() => {
//     console.log(store.getState());
// });


// got idea form this docs...

// https://redux-toolkit.js.org/api/createAsyncThunk

store.dispatch(fetchVideo())
    .unwrap()
    .then((originalPromiseResult) => {
        // handle result here
        store.dispatch(fetchVideos(originalPromiseResult?.tags))

        // console.log(originalPromiseResult?.tags);
    })