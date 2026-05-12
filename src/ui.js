export const displayAnime = (animeList) => {

  const container = document.querySelector("#app");

  container.innerHTML = "";

  animeList.forEach(anime => {

    const div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML = `
      <img src="${anime.images.jpg.image_url}" />

      <div class="card-content">

        <h3>${anime.title}</h3>

        <p>⭐ ${anime.score ? anime.score : "N/A"}</p>

        <p>${anime.status}</p>

        <button class="favorite-btn" data-title="${anime.title}">
          ❤️ Favoriet
        </button>

      </div>
    `;

    container.appendChild(div);

  });

};