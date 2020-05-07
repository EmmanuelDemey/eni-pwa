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
            name: j.name,
            description: j.description || "",
            updated_at: j.updated_at,
            avatar_url: j.owner.avatar_url,
          }));

          return new Response(JSON.stringify(formattedResponse));
        });
      })
    );
  }
});
