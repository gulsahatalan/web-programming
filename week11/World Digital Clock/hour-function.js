function swissHour() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let time = `${hrs}:${mins}:${secs}`;
  return time;
}

function showSwissHour() {
  document.getElementById("clock").innerHTML = swissHour();
}

function showUSAHour() {
  let date = new Date();
  let dateUsa = date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
  });
  document.getElementById("clock").innerHTML = dateUsa;
}

function showNewZelandHour() {
  let date = new Date();
  let dateNewZeland = date.toLocaleTimeString("en-NZ", {
    timeZone: "Pacific/Chatham",
  });
  document.getElementById("clock").innerHTML = dateNewZeland;
}

function changeHour(event) {
  clearInt();
  if (event.target.value == "New Zeland") {
    selectNewZeland (event);
  } else if (event.target.value == "USA") {
    selectUsa (event)
  } else if (event.target.value == "Swiss") {
    selectSwiss(event)
  } else if (event.target.value == "select") {
    selectOption()
  }
}

function selectOption(){
  document.getElementById("clock").innerHTML = "Select a country.";
  document.getElementById("countryName").innerHTML = "";
}

function selectSwiss(event){
  swiss = setInterval(showSwissHour, 1000);
  document.getElementById("countryName").innerHTML = event.target.value;
}

function selectUsa (event){
  usa = setInterval(showUSAHour, 1000);
  document.getElementById("countryName").innerHTML = event.target.value;
}

function selectNewZeland (event){
  newZeland = setInterval(showNewZelandHour, 1000);
    document.getElementById("countryName").innerHTML = event.target.value;
}

// let dateTime = new Date().toLocaleString("en-UK", { timeZone: "america/new_york" });
//     dateTime = new Date(dateTime);



// let dateTime = new Date().toLocaleTimeString("en-UK", { timeZone: "america/new_york" });
//     dateTime = new Date(dateTime);