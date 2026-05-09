import "./style.css";
import { getAnime } from "./api.js";
import { displayAnime } from "./ui.js";

const loadData = async () => {
  const anime = await getAnime();
  displayAnime(anime);
};

loadData();