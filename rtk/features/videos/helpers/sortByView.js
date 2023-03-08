const sortByView = (videos) => {
    let sorted = videos.sort(function (a, b) {
        return parseFloat(b.views) - parseFloat(a.views);
    })
    return sorted;
}
module.exports.sortByView = sortByView;