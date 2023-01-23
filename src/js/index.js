import { projects } from "./utils/projects.js";
if (document.querySelector(".historyReturn")) {
  document.querySelector(".historyReturn").addEventListener("click", () => {});
}

if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/" ||
  window.location.pathname === "/portfolio-v2/index.html" ||
  window.location.pathname === "/portfolio-v2/"
) {
  window.onbeforeunload = function () {
    sessionStorage.setItem("scrollIndex", window.scrollY);
  };

  window.onload = function () {
    if (sessionStorage.getItem("scrollIndex")) {
      window.scrollTo(0, sessionStorage.getItem("scrollIndex"));
    }
  };
}

if (document.querySelector(".dropdown")) {
  dropdownFunction();
}

function dropdownFunction() {
  let dropdown = document.querySelector(".dropdown");
  let dropdownText = document.querySelector(".dropdown-toggle");
  let currentText = dropdownText.innerText;
  let content = document.querySelector(".content");

  dropdown.addEventListener("click", function (event) {
    if (
      event.target.innerText === currentText ||
      event.target.innerText === undefined ||
      event.target.innerText.match(/\n/g)
    ) {
      return;
    }

    dropdownText.innerText = event.target.innerText;
    currentText = dropdownText.innerText;

    // IMPORT DUMPS FRA ANNEN FIL OG PUT INNERHTML SOM IMPORTEN
    switch (currentText) {
      case "Auction House":
        content.innerHTML = projects[0];
        break;
      case "Unite Bot":
        content.innerHTML = projects[1];
        break;
      case "Workflow":
        content.innerHTML = projects[2];
        break;
    }
  });
}
