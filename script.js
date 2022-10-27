//Getting the elements
const main = document.querySelector("main");
const but = document.querySelector("button");
//let bg = document.querySelector(".bg");

//Getting the number
const number = document.querySelector("#number");

let count = 0;

//EventListener on Main
main.addEventListener("click", function () {
  counter();
});

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
  main.style.setProperty("--bg-size", count + "%");
}
