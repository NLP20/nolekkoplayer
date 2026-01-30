"""Prosty skrypt zapisujący tekst do pliku."""

TEKST_DO_ZAPISU = "Witaj! To jest przykładowy tekst zapisany do pliku."
NAZWA_PLIKU = "notatka.txt"

with open(NAZWA_PLIKU, "w", encoding="utf-8") as plik:
    plik.write(TEKST_DO_ZAPISU)

print(f"Zapisano tekst do pliku: {NAZWA_PLIKU}")
