import "./style.css";
import { getAnime } from "./api.js";
import { displayAnime } from "./ui.js";

let animeList = [];

const loadData = async () => {
  animeList = await getAnime();
  displayAnime(animeList);
};

loadData();

// 🔍 Zoekfunctie
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = animeList.filter(anime =>
    anime.title.toLowerCase().includes(value)
  );

  displayAnime(filtered);
});

// ⭐ Favorieten opslaan
document.addEventListener("click", (e) => {

  if (e.target.classList.contains("favorite-btn")) {

    const title = e.target.dataset.title;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(title);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert(`${title} toegevoegd aan favorieten!`);
  }
});

// 🎯 FILTER
const filterSelect = document.querySelector("#filter");

filterSelect.addEventListener("change", (e) => {

  const value = e.target.value;

  if (value === "all") {
    displayAnime(animeList);
    return;
  }

  const filtered = animeList.filter(anime =>
    anime.status === value
  );

  displayAnime(filtered);

});

// SORTEREN
const sortSelect = document.querySelector("#sort");

sortSelect.addEventListener("change", (e) => {

  const value = e.target.value;

  let sortedAnime = [...animeList];

  if (value === "high") {

    sortedAnime.sort((a, b) => b.score - a.score);

  } else if (value === "low") {

    sortedAnime.sort((a, b) => a.score - b.score);

  }

  displayAnime(sortedAnime);

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

  } else {

    localStorage.setItem("theme", "dark");

  }

});