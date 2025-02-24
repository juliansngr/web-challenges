const audioElement = new Audio(`./audio/snus.mp3`);

function playAudio(audioElement) {
  audioElement.play();
}

function pauseAudio(audioElement) {
  audioElement.pause();
}

function stopAudio(audioElement) {
  audioElement.load();
}

export function AudioPlayer() {
  const audioPlayerElement = document.createElement("div");
  audioPlayerElement.classList.add("audioplayer");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("audioplayer__buttoncontainer");

  const playButton = document.createElement("button");
  playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="audioplayer__icon" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84"></path></svg>`;
  playButton.classList.add("audioplayer__button");

  const stopButton = document.createElement("button");
  stopButton.innerHTML = "Stop";
  stopButton.classList.add("audioplayer__button");

  buttonContainer.append(playButton, stopButton);

  const durationBar = document.createElement("input");
  durationBar.setAttribute("type", "range");
  durationBar.classList.add("audioplayer__progressbar");

  audioPlayerElement.append(durationBar, buttonContainer);

  console.log(typeof audioElement.duration);

  playButton.addEventListener("click", () => {
    console.log("play!");
    durationBar.setAttribute("max", `${audioElement.duration}`);
    if (audioElement.paused) {
      playAudio(audioElement);
      playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="audioplayer__icon" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 14c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1m4 0c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1"></path></svg>`;
    } else {
      audioElement.pause();
      playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="audioplayer__icon" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.5 14.67V9.33c0-.79.88-1.27 1.54-.84l4.15 2.67a1 1 0 0 1 0 1.68l-4.15 2.67c-.66.43-1.54-.05-1.54-.84"></path></svg>`;
    }
  });

  stopButton.addEventListener("click", () => {
    console.log("stop!");
    console.log(audioElement.duration);
    stopAudio(audioElement);
  });

  audioElement.addEventListener("timeupdate", () => {
    console.log(audioElement.currentTime);
    durationBar.value = audioElement.currentTime;
  });

  durationBar.addEventListener("input", (event) => {
    audioElement.currentTime = event.target.value;
  });

  document.body.append(audioPlayerElement);
}
