document.addEventListener("DOMContentLoaded", function() {
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.play();
    
    videoPlayer.addEventListener("loadedmetadata", function() {
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.webkitRequestFullscreen) { /* Safari */
            videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) { /* IE11 */
            videoPlayer.msRequestFullscreen();
        }
    });
});
