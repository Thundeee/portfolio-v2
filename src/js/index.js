import { projects } from "./utils/projects.js";
if (document.querySelector('.historyReturn')) {
    document.querySelector('.historyReturn').addEventListener('click', () => {
console.log('historyReturn');    });
}
    
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    window.onbeforeunload = function() {
    sessionStorage.setItem('scrollIndex', window.scrollY);
  }
  
  window.onload = function() {
    if (sessionStorage.getItem('scrollIndex')) {
      window.scrollTo(0, sessionStorage.getItem('scrollIndex'));
    }
  }

}

if (document.querySelector('.dropdown')) {
    dropdownFunction();
}


function dropdownFunction() {
    

let dropdown = document.querySelector('.dropdown');
let dropdownText = document.querySelector('.dropdown-toggle');
let currentText = dropdownText.innerText;
let content = document.querySelector('.content');

dropdown.addEventListener('click', function(event) {
console.log(event)
        if (event.target.innerText === currentText) {
            return;
        }


        dropdownText.innerText = event.target.innerText;
        currentText = dropdownText.innerText;

        // IMPORT DUMPS FRA ANNEN FIL OG PUT INNERHTML SOM IMPORTEN
        console.log(currentText)
        switch (currentText) {
            case "Auction House":
              console.log("Auction House");
              console.log(projects[0])
              content.innerHTML = projects[0];
              break;
            case "Unite Bot":
              console.log("Unite Bot");
              console.log(projects[1])
              content.innerHTML = projects[1];

              break;
              case "Workflow":
                console.log("Workflow");
                console.log(projects[2])
                content.innerHTML = projects[2];

                break;
          }
});
  }