/*
Bu applikasyonda kelime oyunu olusturulacaktir.
Kullanici;
-Ekrana karisik olarak gelen heceleri siralayabilecek.
-check butonuna bastiginda dogrulugunu kontrol edebilecek.
-random butonuna bastiginda baska bir kelime ekrana gelecek.

** Asagidaki islemler uygulanacaktir.**
1) Kelime nesnesi ( hecelerine ayrilmis olarak) olusturulur. 
2) innerHTML ile ekran goruntusu olusturulur.
3) Drag-drop api ile hecelerin siralanmasi saglanir.
4) butonlara addeventListener ekleyip check ve random fonksiyonlari yazilir.
*/

const wordList = [
  ["ku", "ra", "bi", "ye"],
  ["ker", "ten", "ke", "le"],
  ["kas", "ta", "mo", "nu"],
  ["lo", "ga", "rit", "ma"],
  ["ka", "ra", "de", "niz"],
  ["me", "de", "ni", "yet"],
  ["te", "ker", "le", "me"],
  ["tor", "na", "vi", "da"],
  ["nok", "ta", "la", "ma"],
  ["bil", "gi", "sa", "yar"],
];

let base, randomized, dragging, draggedOver;
let isRight = "";
document.addEventListener("drag", (event) => {
  if (event.target.className == "syllable") {
    setDragging(event);
  }
});
document.addEventListener("dragover", (event) => {
  if (event.target.className == "syllable") {
    setDraggedOver(event);
  }
});
document.addEventListener("drop", (event) => {
  if (event.target.className == "syllable") {
    compare(event);
  }
});

genRandom(wordList[0]);
document.addEventListener("click", getRandom);
document.addEventListener("click", getClick);
