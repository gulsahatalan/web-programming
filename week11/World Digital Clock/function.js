function writeMainContent() {
  let selectPart = `<form>
   <select id="country">
   <option value="select">Select a country</option>
<option value="New Zeland">New Zeland</option>
    <option value="Swiss">Swiss</option>
    <option value="USA">USA</option>
  </select>
</form>`;
  return selectPart;
}

function title() {
  return `<h1>World Dijital Clock</h1>`;
}

function clearInt() {
  clearInterval(usa);
  clearInterval(swiss);
  clearInterval(newZeland);
}
