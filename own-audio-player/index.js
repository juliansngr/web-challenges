const playButton = document.querySelector("[data-js=play]");
const pauseButton = document.querySelector("[data-js=pause]");
const stopButton = document.querySelector("[data-js=stop]");

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

playButton.addEventListener("click", () => {
  console.log("play!");
  playAudio(audioElement);
});

pauseButton.addEventListener("click", () => {
  console.log("pause!");
  pauseAudio(audioElement);
});

stopButton.addEventListener("click", () => {
  console.log("stop!");
  stopAudio(audioElement);
});
