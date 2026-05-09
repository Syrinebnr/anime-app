export const getAnime = async () => {
  const response = await fetch("https://api.jikan.moe/v4/anime");
  const data = await response.json();
  return data.data;
};