function createStudentTableHeader() {
  return `
    <tr>
    <td>NAME</td>
    <td>SURNAME</td>
    <td>AGE</td>
    </tr>`;
}
function createStudentTable() {
  return `
    <h2> STUDENT LIST </h2>
    <table id="studentTable">
           ${createStudentTableHeader()}
           ${createStudentTableBody()}
    </table>
    <p>${toplam()}</p>`;
}

function toplam(){ return`<p>Total Students : ${newStudentList.length}</p>`
}

function showNewStudentTable() {
  let newStudent = {
    Name: document.getElementById("name").value,
    Surname: document.getElementById("surname").value,
    Age: document.getElementById("age").value,
  };
  newStudentList.push(newStudent);
}

function createStudentTableBody() {
  let tableBody = newStudentList
    .map(
      (student, index) =>
        `
      <tr>
      <td>${student.Name}</td>
      <td>${student.Surname}</td>
      <td>${student.Age}</td>
      <td><button  id="${index}" class="delete">Delete</button></td>
      </tr>
      `
    )
    .join("");
  return tableBody;
}
