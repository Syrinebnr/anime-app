import "./style.css";
import { getAnime } from "./api.js";
import { displayAnime } from "./ui.js";

let animeList = [];

const loadData = async () => {
  animeList = await getAnime();
  displayAnime(animeList);
};

loadData();

// 🔍 ZOEKFUNCTIE
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = animeList.filter(anime =>
    anime.title.toLowerCase().includes(value)
  );

  displayAnime(filtered);
});