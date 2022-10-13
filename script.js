//Getting the elements
const main = document.querySelector("main");
const but = document.querySelector("button");
//let bg = document.querySelector(".bg");

//Getting the number
const number = document.querySelector("#number");

let count = 0;

//EventListener on Main
main.addEventListener("click", function () {
  //number.innerText++;
  //main.style.backgroundImage =
  //"linear-gradient(to right, yellow " + number.innerText++ +"%, transparent 0)";
  counter();
});

// Custom Property importieren
//console.log(getComputedStyle(main).getPropertyValue("--bg-size"));

//CustomProperty nutzen
//console.log(main.style.setProperty("--bg-size", "${count}%"));

//Eventlistener on Document
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    counter();
  }
});

//Eventlistener on Button
but.addEventListener("click", function () {
  count = 0;
  number.innerText = count;
  main.style.backgroundImage =
    "linear-gradient(to right, blue " + count + "%, transparent 0%)";
});

function counter() {
  count++;
  number.innerText = count;
  //main.style.setProperty("--bg-size", $'{count}%`);
  : 0;main.style.setProperty("--bg-size", count + "%");
  //main.style.backgroundImage =
  // "linear-gradient(to right, rgb(243, 200, 9) ${count}%, transparent 0)";
  // "linear-gradient(to right, rgb(243, 200, 9) " +
  // count +
  // "%, transparent 0)";
}
