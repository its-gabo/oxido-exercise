# Zadanie rekrutacyjne Oxido

Zadanie polega na stworzeniu aplikacji w Pythonie lub JavaScript, która łączy się z API OpenAI, przetwarza artykuł z pliku tekstowego, generując odpowiedni kod HTML. Kod HTML powinien zawierać tagi strukturalne, placeholdery dla obrazków z opisami i podpisami oraz być zapisany w pliku artykul.html.

## Dependencies

Projekt używa NodeJS w wersji 21.7.1.

Jeśli używasz innej wersji NodeJs, pobierz `nvm`, a następnie zainstaluj odpowiednią wersję jego.

```bash
# Instalacja NodeJS
nvm install 21.7.1

# Zmiana używanej wersji NodeJS
nvm use 21.7.1
```

## Uruchomienie projektu

```bash
# Zklonuj repozytorium używając.
git clone git@github.com:its-gabo/oxido-exercise.git


# Następnie przejdź do folderu z projektem.
cd /oxido-exercise


# Zainstaluj wszystkie potrzebne paczki używając
npm install
```

<br>

Utwórz plik `.env`, w którym umieścisz swój klucz do API OpenAI

```bash
OPENAI_API_KEY=my_api_key
```

<br>

Aby uruchomić skrypt wpisz w konsolę

```bash
node main.js
```
