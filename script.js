function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}

const dateTimeFormat = Intl.DateTimeFormat("fr");

function initFavorites() {
  let getFavorites;
  if (navigator.onLine) {
    getFavorites = fetch("http://localhost:3000/favorites")
      .then((response) => response.json())
      .then((favorites) => {
        return localforage.setItem("favorites", favorites);
      });
  } else {
    getFavorites = localforage.getItem("favorites");
  }
  // GET all favories depuis l'url et indexedb
  getFavorites.then((allFavorites) => {
    const favorites = allFavorites || [];

    favorites.forEach((id) => {
      document
        .querySelector("[data-repo-id='" + id + "']")
        .classList.add("is-warning");
    });
  });
}

function initClickHandler() {
  const favorisButton = document.querySelectorAll("[data-repo-id]");

  Array.from(favorisButton).forEach((link) => {
    link.addEventListener("click", function (event) {
      localforage
        .getItem("favorites")
        .then((storedFavorites) => {
          const favorites = storedFavorites || [];

          const repoId = event.target.dataset.repoId;
          let newFavorites;
          if (event.target.classList.contains("is-warning")) {
            newFavorites = favorites.filter((id) => id !== repoId);
          } else {
            newFavorites = Array.from(new Set([...favorites, repoId]));
          }

          if (navigator.onLine) {
            return fetch("http://localhost:3000/favorites", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newFavorites),
            });
          } else {
            // get from indexedb
            return localforage.setItem("favorites", newFavorites).then(() => {
              navigator.permissions
                .query({
                  name: "background-sync",
                })
                .then(({ state }) => {
                  console.log(state);
                  if (state === "granted") {
                    return navigator.serviceWorker.ready.then((reg) => {
                      return reg.sync.register("syncFavorites");
                    });
                  }
                });
            });
          }
        })
        .then(() => {
          event.target.classList.toggle("is-warning");
        });
    });
  });
}
function generateUI(json) {
  const chunks = chunkArray(json, 3);

  let html = "";

  chunks.forEach((chunk) => {
    html += '<div class="columns">';

    chunk.forEach((repo) => {
      html += `
            <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${repo.name}</p>
                    
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                  <br />
                  Dernière mise à jour: <time datetime="${
                    repo.updated_at
                  }">${dateTimeFormat.format(new Date(repo.updated_at))}</time>
                  <button class="button" data-repo-id="${repo.id}">
                    Favori
                  </button>
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".container").innerHTML = html;

  initFavorites();

  initClickHandler();
}

document.addEventListener("DOMContentLoaded", function () {
  if (navigator.onLine) {
    document.querySelector(".notification").setAttribute("hidden", "");
  }

  window.addEventListener("online", () => {
    document.querySelector(".notification").setAttribute("hidden", "");
  });
  window.addEventListener("offline", () => {
    document.querySelector(".notification").removeAttribute("hidden");
  });

  let fetchData;
  if (navigator.onLine) {
    fetchData = fetch("https://api.github.com/users/EmmanuelDemey/repos")
      .then((response) => response.json())
      .then((data) => localforage.setItem("data", data));
  } else {
    fetchData = localforage.getItem("data");
  }

  fetchData.then((json) => generateUI(json));
});
