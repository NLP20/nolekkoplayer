const audio = document.getElementById("audio");
const playButton = document.getElementById("playBtn");
const pauseButton = document.getElementById("pauseBtn");
const stopButton = document.getElementById("stopBtn");
const volumeSlider = document.getElementById("volume");
const streamInput = document.getElementById("streamUrl");
const statusLabel = document.getElementById("status");
const nowPlaying = document.getElementById("nowPlaying");

const setStatus = (message, isError = false) => {
  statusLabel.textContent = message;
  statusLabel.style.background = isError ? "#ffe1e3" : "#e4e8f7";
  statusLabel.style.color = isError ? "#a11b24" : "#1f2232";
};

const setNowPlaying = (message) => {
  nowPlaying.textContent = message;
};

const updateStream = () => {
  const url = streamInput.value.trim();
  if (!url) {
    setStatus("Podaj adres streamu", true);
    setNowPlaying("Brak adresu do odtworzenia.");
    return false;
  }

  if (audio.src !== url) {
    audio.src = url;
  }
  setNowPlaying(url);
  return true;
};

playButton.addEventListener("click", async () => {
  if (!updateStream()) {
    return;
  }

  try {
    await audio.play();
    setStatus("Odtwarzanie");
  } catch (error) {
    setStatus("Nie udało się odtworzyć strumienia", true);
    console.error(error);
  }
});

pauseButton.addEventListener("click", () => {
  audio.pause();
  setStatus("Pauza");
});

stopButton.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  setStatus("Zatrzymano");
});

volumeSlider.addEventListener("input", (event) => {
  audio.volume = Number(event.target.value);
});

streamInput.addEventListener("change", () => {
  setStatus("Gotowy do odtwarzania");
  setNowPlaying(streamInput.value.trim() || "Wybierz adres streamu, aby rozpocząć.");
});

setStatus("Gotowy do odtwarzania");
setNowPlaying("Wybierz adres streamu, aby rozpocząć.");
