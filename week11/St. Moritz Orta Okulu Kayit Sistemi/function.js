function writeInner() {
  document.getElementById("registerList").innerHTML = createStudentTable();
}

function removeFromList(index) {
  delete newStudentList[index];

  writeInner();
}
