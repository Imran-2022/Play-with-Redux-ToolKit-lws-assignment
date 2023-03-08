const store = require("../../app/store");
const fetch = require("node-fetch");
const { fetchVideos } = require("./relatedVideosSlice");

const singleVideo = async()=>{
    const response = await fetch(
        "http://localhost:9000/videos"
    );
    const post = await response.json();
    // console.log(post?.tags);
    store.dispatch(fetchVideos(post?.tags));
}
module.exports.singleVideo = singleVideo;