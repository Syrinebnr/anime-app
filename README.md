# Anime Explorer

Een interactieve single-page applicatie voor het vak Web Advanced.

Met deze app kan je anime ontdekken, zoeken, filteren, sorteren en toevoegen aan favorieten.

---

# Waarom anime?

Ik kijk zelf graag anime en vond het daarom leuker om een project te maken rond iets waarin ik echt geïnteresseerd ben. Hierdoor wist ik beter welke informatie belangrijk was en hoe ik de interface aantrekkelijk kon maken.

De Jikan API is gratis, eenvoudig te gebruiken en bevat enorm veel anime-data, wat perfect was voor dit project.

---

# Wat doet de app?

- Anime ophalen via de Jikan Anime API
- Anime kaarten tonen met afbeelding, score en status
- Zoeken op anime naam
- Filteren op status (Airing / Finished)
- Sorteren op hoogste of laagste score
- Favorieten toevoegen en verwijderen
- Dark / Light mode switch
- Moderne anime-style interface
- Responsive design voor verschillende schermgroottes

---

# Gebruikte API

Jikan Anime API  
https://jikan.moe/

Gratis publieke API voor anime-data gebaseerd op MyAnimeList.

---

# Installatie

```bash
npm install
npm run dev

Open daarna:

http://localhost:5173

Voor een productie-build:

npm run build

Mappenstructuur
anime-app/
├── index.html
├── package.json
├── README.md
├── screenshots/
├── public/
└── src/
    ├── main.js
    ├── api.js
    ├── ui.js
    ├── style.css
    ├── counter.js
    └── assets/

Technische vereisten

DOM manipulatie
Elementen selecteren met getElementById
Dynamisch anime kaarten genereren
innerHTML gebruiken om content te tonen
Events koppelen met addEventListener


Modern JavaScript

const en let
Arrow functions
Template literals
Array methods (filter, sort)
Async / Await
Fetch API
LocalStorage
Modules (import/export)


Data & API

Anime data ophalen met fetch
JSON verwerken via response.json()
Data tonen in kaarten


Opslag & functionaliteiten

Favorieten bewaren met localStorage
Theme voorkeur bewaren
Zoekfunctionaliteit
Filtering en sorting


Styling & layout

CSS Grid voor anime kaarten
Flexbox voor controls
Responsive design
Dark anime UI styling
Hover effecten en animaties


Tooling

Vite
Git & GitHub
Modulaire bestandenstructuur


Gebruikersvoorkeuren (LocalStorage)

Sleutel	Wat wordt opgeslagen
anime_theme	dark of light
anime_favorites	favoriete anime

Screenshots

Homepage

Favorites

Search

Light Mode

Bronnen
Jikan API: https://jikan.moe/
MDN Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
MDN LocalStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
Vite Docs: https://vitejs.dev/
ChatGPT (OpenAI): hulp bij debugging, README structuur en UI verbeteringen

SCREEMSHOTS
<img width="2243" height="1296" alt="Screenshot 2026-05-25 021717" src="https://github.com/user-attachments/assets/349474e2-ba75-4a05-894b-e9cc5fe578a4" />

<img width="2243" height="1296" alt="Screenshot 2026-05-25 021717" src="https://github.com/user-attachments/assets/b2874685-31e2-420d-996b-3a150c51617f" />
<img width="2230" height="1404" alt="Screenshot 2026-05-25 021929" src="https://github.com/user-attachments/assets/75d086f0-b19e-48c8-902d-1aca81f0a599" />
<img width="2234" height="1399" alt="Screenshot 2026-05-25 021918" src="https://github.com/user-attachments/assets/1e2b4176-f4ed-4909-8505-44c8eaec3063" />

