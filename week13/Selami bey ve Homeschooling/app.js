let firstNumber = "";
let secondNumber = "";
let studentName = "";
let storageList = [];
let interval = "";
let counter = 0;
firstNumber = Math.floor(Math.random() * 10);
secondNumber = Math.floor(Math.random() * 10);

document.getElementById("user").innerHTML = writeDiv();
document.getElementById("addUser").innerHTML = addUserName();
document.getElementById("main-container").addEventListener("click", (event) => {
  if (event.target.id === "add") {
    input();
  } else if (event.target.id === "addButon") {
    addPlayer();
  }
});
document.addEventListener("click", (event) => {
  if (event.target.className == "names-list-group-item") {
    studentName = event.target.id;
    innerHTML();
    interval = setInterval(innerHTML, 10000);
  }
});
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (counter <= 2) {
      uptadePoint();
      document.getElementById("main-container").innerHTML = createGameArea();
    } else {
      document.getElementById("main-container").innerHTML = writeDiv();
    }
    clearInterval(interval);
  }
});
