document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById('videoLoop');
    video.play();

    // Versucht, in den Vollbildmodus zu wechseln
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */

    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});
