function getAutoUnmuteStatus(callback) {
    chrome.storage.local.get('autoUnmute', function(result) {
        callback(result.autoUnmute || false);
    });
}

function tryToUnmuteVideo() {
    getAutoUnmuteStatus(function(isAutoUnmute) {
        if (!isAutoUnmute) return;

        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video.muted) {
                video.muted = false;
            }
        });
    });
}


setInterval(tryToUnmuteVideo, 1000);
