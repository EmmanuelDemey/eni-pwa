import { chunkArray, dateTimeFormat } from "./utils";

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
  const favorisButton = document.querySelectorAll(".favorite[data-repo-id]");

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
                    Notification.requestPermission(function (status) {
                      console.log("Notification permission status:", status);
                    });

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
export default function generateUI(json) {
  let j;
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
                    <p class="title is-4"><a href="${repo.html_url}">${
        repo.name
      }</a></p>
                    
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
  
                <div class="content">
                   ${repo.description}
                  <br />
                  Dernière mise à jour: <time datetime="${
                    repo.updated_at
                  }">${dateTimeFormat.format(new Date(repo.updated_at))}</time>
                  <button class="favorite button" data-repo-id="${repo.id}">
                    Favori
                  </button>
                  <button class="share button" data-repo-id="${repo.id}" hidden>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>`;
    });
    html += "</div>";
  });

  document.querySelector(".container").innerHTML = html;

  initWebShare(json);

  initPortals();

  initFavorites();

  initClickHandler();
}

function initPortals() {
  if ("HTMLPortalElement" in window) {
    const links = document.querySelectorAll(".title a");
    Array.from(links).forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = e.target.href;
        const portal = document.createElement("portal");
        portal.src = url;
        document.body.appendChild(portal);

        portal.addEventListener("click", (evt) => {
          portal.classList.add("portal-reveal");
        });

        portal.addEventListener("transitionend", (evt) => {
          portal.activate();
        });
      });
    });
  }
}

function initWebShare(projects) {
  if ("share" in navigator) {
    const buttons = document.querySelectorAll(".share[data-repo-id]");
    Array.from(buttons).forEach((button) => {
      button.removeAttribute("hidden");
      button.addEventListener("click", (e) => {
        const project = projects.find(
          (project) => project.id == event.target.dataset.repoId
        );
        navigator.share({
          title: project.name,
          text: project.description,
          url: project.html_url,
        });
      });
    });
  }
}
