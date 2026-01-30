# NoLekkoPlayer

NoLekkoPlayer to prosty odtwarzacz muzyki online działający w przeglądarce. Projekt składa się wyłącznie z plików statycznych, więc możesz go łatwo uruchomić lokalnie albo opublikować w internecie.

## Uruchomienie lokalne

```bash
python -m http.server 8000
```

Następnie otwórz `http://localhost:8000` w przeglądarce.

## Publikacja online (GitHub Pages)

1. W repozytorium GitHub wejdź w **Settings → Pages**.
2. W sekcji **Build and deployment** wybierz **Deploy from a branch**.
3. Ustaw gałąź `main` (lub `master`) oraz katalog `/root`.
4. Zapisz ustawienia. Po chwili otrzymasz adres URL, pod którym aplikacja będzie dostępna online.

> Jeśli pracujesz w innej gałęzi, zmerguj zmiany do `main` przed publikacją.

## Struktura plików

- `index.html` — główny interfejs użytkownika.
- `styles.css` — style aplikacji.
- `app.js` — logika odtwarzacza.
- `logo.svg` — logo aplikacji.

## Gdzie umieszczać pliki audio?

Najprościej jest dodać pliki audio bezpośrednio do repozytorium (np. w katalogu `audio/`), a potem używać ich ścieżek w polu „Adres streamu”, np. `audio/moj-utwor.mp3`.
