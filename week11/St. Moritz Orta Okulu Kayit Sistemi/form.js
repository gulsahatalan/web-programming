function showForm() {
    let studentForm = `
    <section>
    <h2>Student</h2>
  <form>
      <label> Name:</label><br>
      <input type="text" id="name" value=""><br>
      <label> Surname:</label><br>
      <input type="text" id="surname" value="" ><br>
      <label> Age:</label><br>
      <input type="number" min="4" max="18" id="age" value="" ><br>
       </form>
      <button id="button" >Click to ADD</button>
    </section>
      `
    return studentForm;
  }