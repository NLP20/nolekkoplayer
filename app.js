const odtwarzacz = document.getElementById("audio");
const przyciskOdtwarzaj = document.getElementById("playBtn");
const przyciskPauza = document.getElementById("pauseBtn");
const przyciskStop = document.getElementById("stopBtn");
const suwakGlosnosci = document.getElementById("volume");
const poleStrumienia = document.getElementById("streamUrl");
const etykietaStatusu = document.getElementById("status");
const etykietaTerazOdtwarzane = document.getElementById("nowPlaying");

const ustawStatus = (wiadomosc, czyBlad = false) => {
  etykietaStatusu.textContent = wiadomosc;
  etykietaStatusu.style.background = czyBlad ? "#ffe1e3" : "#e4e8f7";
  etykietaStatusu.style.color = czyBlad ? "#a11b24" : "#1f2232";
};

const ustawTerazOdtwarzane = (wiadomosc) => {
  etykietaTerazOdtwarzane.textContent = wiadomosc;
};

const aktualizujStrumien = () => {
  const url = poleStrumienia.value.trim();
  if (!url) {
    ustawStatus("Podaj adres streamu", true);
    ustawTerazOdtwarzane("Brak adresu do odtworzenia.");
    return false;
  }

  if (odtwarzacz.src !== url) {
    odtwarzacz.src = url;
  }
  ustawTerazOdtwarzane(url);
  return true;
};

przyciskOdtwarzaj.addEventListener("click", async () => {
  if (!aktualizujStrumien()) {
    return;
  }

  try {
    await odtwarzacz.play();
    ustawStatus("Odtwarzanie");
  } catch (error) {
    ustawStatus("Nie udało się odtworzyć strumienia", true);
    console.error(error);
  }
});

przyciskPauza.addEventListener("click", () => {
  odtwarzacz.pause();
  ustawStatus("Pauza");
});

przyciskStop.addEventListener("click", () => {
  odtwarzacz.pause();
  odtwarzacz.currentTime = 0;
  ustawStatus("Zatrzymano");
});

suwakGlosnosci.addEventListener("input", (event) => {
  odtwarzacz.volume = Number(event.target.value);
});

poleStrumienia.addEventListener("change", () => {
  ustawStatus("Gotowy do odtwarzania");
  ustawTerazOdtwarzane(poleStrumienia.value.trim() || "Wybierz adres streamu, aby rozpocząć.");
});

ustawStatus("Gotowy do odtwarzania");
ustawTerazOdtwarzane("Wybierz adres streamu, aby rozpocząć.");
