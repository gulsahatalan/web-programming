function addPlayer() {
  let userList = [];
  let inputText = document.getElementById("user-info");
  if (inputText.value == "") {
    swal("Please write an username");
  } else {
    userList.push({ name: inputText.value, point: 0 });
    let key = inputText.value;
    localStorage.setItem(key, JSON.stringify(userList));
    document.getElementById("user").innerHTML = writeDiv(userList);
  }
}

function uptadePoint() {
  let lastPoint = calculatePoint();
  let activePerson = [];
  activePerson = JSON.parse(localStorage.getItem(studentName));
  activePerson[0].point += lastPoint;
  localStorage.setItem(studentName, JSON.stringify(activePerson));
}

function calculatePoint() {
  let result = firstNumber * secondNumber;
  let point = 0;
  let studentResult = document.getElementById("result-number").value;
  console.log(result);
  console.log(studentResult);
  if (result == studentResult) {
    point += 10;
  }
  return point;
}
