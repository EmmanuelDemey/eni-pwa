importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js"
);

const cacheName = "blog-v1";
const { assets } = global.serviceWorkerOption;

const files = [
  "/",
  ...assets,
  "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js",
  "https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.css",
  "https://bulma.io/images/placeholders/1280x960.png",
  "https://bulma.io/images/placeholders/96x96.png",
];

self.addEventListener("install", (e) => {
  caches.open(cacheName).then((cache) => {
    cache.addAll(files);
  });
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  if (url.indexOf("https://api.github.com/users/") === 0) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if (response.statusText !== "OK") {
          console.error(
            "Service Worker",
            "Error when fetching",
            event.request.url
          );

          /*fetch("/api/monitoring", {
            method: "POST",
            body: JSON.stringify({
              url: event.request.url,
              status: response.status
            })
          });*/

          return response;
        }
        console.info("Formatting data");

        return response.json().then((json) => {
          const formattedResponse = json.map((j) => ({
            id: j.id,
            name: j.name,
            description: j.description || "",
            updated_at: j.updated_at,
            avatar_url: j.owner.avatar_url,
            html_url: j.html_url,
          }));

          return new Response(JSON.stringify(formattedResponse));
        });
      })
    );
  } else {
    event.respondWith(
      caches
        .open(cacheName)
        .then((cache) => cache.match(event.request))
        .then((response) => response || fetch(event.request))
    );
  }
});

self.addEventListener("sync", (event) => {
  if (event.tag === "syncFavorites") {
    console.log("Synchronisation en cours");

    if (Notification.permission === "granted") {
      registration.showNotification("Synchronisation en cours");
    }

    event.waitUntil(
      localforage.getItem("favorites").then((favorites) => {
        return fetch("http://localhost:3000/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(favorites),
        });
      })
    );
  }
});
