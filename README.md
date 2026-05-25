Anime Explorer

Een interactieve single-page applicatie voor het vak Web Advanced.
Met deze app kan je anime ontdekken, zoeken, filteren, sorteren en toevoegen aan favorieten.

Waarom anime?

Ik kijk zelf graag anime en vond het daarom leuker om een project te maken rond iets waarin ik echt geïnteresseerd ben. Hierdoor wist ik beter welke informatie belangrijk was en hoe ik de interface aantrekkelijk kon maken. De Jikan API is gratis, eenvoudig te gebruiken en bevat enorm veel anime-data, wat perfect was voor dit project.

Wat doet de app?
Anime ophalen via de Jikan Anime API
Anime kaarten tonen met afbeelding, score en status
Zoeken op anime naam
Filteren op status (Airing / Finished)
Sorteren op hoogste of laagste score
Favorieten toevoegen en verwijderen
Dark / Light theme switch
Moderne anime-style interface
Responsive design voor verschillende schermgroottes
Gebruikte API

Jikan Anime API — https://jikan.moe/

Gratis publieke API voor anime-data gebaseerd op MyAnimeList.

Installatie
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
├── public/
├── screenshots/
└── src/
    ├── main.js
    ├── api.js
    ├── ui.js
    ├── counter.js
    ├── style.css
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
Array methods (filter, sort, map)
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
Modulaire bestandenstructuur
Git & GitHub
Gebruikersvoorkeuren (LocalStorage)
Sleutel	Wat wordt opgeslagen
anime_theme	dark of light
anime_favorites	favoriete anime