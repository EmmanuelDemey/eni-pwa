import generateUI from "./javascript/generateUI";

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
