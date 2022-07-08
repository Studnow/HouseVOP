let supportsProgress = document.createElement("progress").max !== undefined;
if (!supportsProgress) progress.setAttribute("data-state", "fake");

let playVideo = function (type) {
  if (type == 'playpause') {
    if (video.paused || video.ended) {
      playpause.setAttribute("data-state", 'play')
      playpause.style.visibility = "visible";
    }
    else {
      playpause.setAttribute('data-state', 'pause');
      playpause.style.visibility = "hidden";
    }
  }
  else if (type == 'mute') {
    mute.setAttribute('data-state', video.muted = 'mute')
  }
}

video.addEventListener('play', function () {
  playVideo('playpause');
}, false);
video.addEventListener('pause', function () {
  playVideo('playpause');
}, false);

let videoToggler = function (e) {
  if (video || playpause) {
    if (video.paused || video.ended) video.play();
    else video.pause();
  }
}

video.addEventListener("click", videoToggler);
playpause.addEventListener('click', videoToggler)
