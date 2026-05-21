import "./style.css";
import { getAnime } from "./api.js";
import { displayAnime } from "./ui.js";

let animeList = [];


// DATA LADEN
const loadData = async () => {

  animeList = await getAnime();

  displayAnime(animeList);

};

loadData();

// 🔍 SEARCH
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase();

  const filteredAnime = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(value)
  );

  displayAnime(filteredAnime);

});

// 🎯 FILTER
const filterSelect = document.querySelector("#filter");

filterSelect.addEventListener("change", (e) => {

  const value = e.target.value;

  // ALLES
  if (value === "all") {

    displayAnime(animeList);

  }

  // FAVORIETEN
  else if (value === "favorites") {

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const favoriteAnime = animeList.filter((anime) =>
      favorites.includes(anime.title)
    );

    displayAnime(favoriteAnime);

  }

  // AIRING / FINISHED
  else {

    const filteredAnime = animeList.filter(
      (anime) => anime.status === value
    );

    displayAnime(filteredAnime);

  }

});

// ⭐ SORTING
const sortSelect = document.querySelector("#sort");

sortSelect.addEventListener("change", (e) => {

  const value = e.target.value;

  let sortedAnime = [...animeList];

  // HOOGSTE SCORE
  if (value === "high") {

    sortedAnime.sort((a, b) => b.score - a.score);

  }

  // LAAGSTE SCORE
  else if (value === "low") {

    sortedAnime.sort((a, b) => a.score - b.score);

  }

  displayAnime(sortedAnime);

});

// ❤️ FAVORIETEN OPSLAAN
document.addEventListener("click", (e) => {

  if (e.target.classList.contains("favorite-btn")) {

    const title = e.target.dataset.title;

    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    // dubbele favorieten vermijden
    if (!favorites.includes(title)) {

      favorites.push(title);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      alert(`${title} toegevoegd aan favorieten!`);

    }

  }

});

// 🌙 THEME SWITCHER
const themeBtn = document.querySelector("#theme-btn");

// opgeslagen theme checken
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.add("light-mode");

}

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {

    localStorage.setItem("theme", "light");

  }

  else {

    localStorage.setItem("theme", "dark");

  }

});