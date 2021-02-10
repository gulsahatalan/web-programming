function getRandom(event) {
  if (event.target.id === "random") {
    let index = Math.floor(Math.random() * wordList.length);
    isRight = "";
    genRandom(wordList[index]);
  }
}
function getClick(event) {
  if (event.target.id === "check") {
    isRight =
      randomized.join("") === base.join("") ? "In Order!" : "Not In Order!";
    renderItems(randomized);
  }
}

function writeButtonSection() {
  writeHtml = `<section id="button">
         <button id="random">Random</button>
         <button id="check">Check</button>
       </section>`;
  return writeHtml;
}

function writeDivSection(pList) {
  let section = `<div id='container'>
         <h1 id='isRight'></h1>
       <ul id='list'>`;
  pList.map((word) => {
    section += `<li class="syllable" draggable=true>${word}</li>`;
  });
  section += `</ul>
       </div>
       `;
  return section;
}

function innerHtml(pList) {
  return `<div>
      ${writeDivSection(pList)}
      ${writeButtonSection()}
      </div>`;
}
function genRandom(array) {
  base = array.slice();
  randomized = array.sort(() => Math.random() - 0.5);

  renderItems(randomized);
}

function renderItems(data) {
  document.getElementById("main-container").innerHTML = innerHtml(data);
  document.getElementById("isRight").innerText = isRight;
}

function setDraggedOver(e) {
  e.preventDefault();
  draggedOver = Number.isNaN(parseInt(e.target.innerText))
    ? e.target.innerText
    : parseInt(e.target.innerText);
}
function setDragging(e) {
  dragging = Number.isNaN(parseInt(e.target.innerText))
    ? e.target.innerText
    : parseInt(e.target.innerText);
}
function compare(e) {
  let index1 = randomized.indexOf(dragging);
  let index2 = randomized.indexOf(draggedOver);
  randomized.splice(index1, 1);
  randomized.splice(index2, 0, dragging);
  renderItems(randomized);
}
