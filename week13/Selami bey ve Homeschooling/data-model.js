function writeDiv() {
  username();
  let userNames = `<div>
    <h1 id='title'>Select your name</h1>
  <ul class="list-group list-group-horizontal" id='list'>`;
  storageList
    .map((players) =>
      players.map(
        (player, index) =>
          (userNames += `<li class="names-list-group-item" id="${player.name}" >${player.name} Skor:${player.point}</li>`)
      )
    )
    .join("");
  userNames += `</ul>
           </div>
           `;
  return userNames;
}

function username() {
  for (let index = 0; index < localStorage.length; index++) {
    let player = JSON.parse(localStorage.getItem(localStorage.key(index)));
    storageList.push(player);
  }
}

function addUserName() {
  let buton = `<button id="add">Add Username</button>`;
  return buton;
}

function input() {
  document.getElementById("addInput").innerHTML = inputDiv();
}

function inputDiv() {
  return `<div class="input-group mb-3">
            <input type="text" id="user-info" class="form-control" placeholder="write an username" aria-label="write an username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="addButon">ADD</button>
            </div>
          </div>`;
}

function innerHTML() {
  document.getElementById("main-container").innerHTML = createGameArea();
}

function createGameArea() {
  counter++;
  return `<div id="calculation-place">
       <div id="question-number">Question</div>
       <span class="numbers" id="first-number">${firstNumber}</span>
       <span id="cross-mark">x</span>
       <span class="numbers" id="second-number">${secondNumber}</span>
       <span id="equal-mark">=</span>
       <input id="result-number"></input>
      </div>`;
}
