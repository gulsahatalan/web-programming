//Bu haftaki programlama ödevimizde bir ciftciye yardim edecegiz. Ciftcimiz anlasmali oldugu kelle pacaci Necip Ustaya gercek zamanli istatistik vermek istiyor. Gayet müslüman olan Necip Usta ise, sordugu anda kac tane hayvan bacagi oldugu bilgisini almak istiyor.

//Program:
//Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
// inek
//tavuk
//domuz
//koyun

//Array örnegi: [“inek”, “inek”, “tavuk”, “domuz”, “inek”]
//Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.

const ciftlikHayvanlari = [
  "inek",
  "tavuk",
  "domuz",
  "koyun",
  "tavuk",
  "inek",
  "inek",
  "domuz",
  "koyun",
  "inek",
];
const inekListesi = [];
const tavukListesi = [];
const domuzListesi = [];
const koyunListesi = [];
for (index = 0; index < ciftlikHayvanlari.length; index++) {
  if (ciftlikHayvanlari[index].includes("inek")) {
    inekListesi.push("inek");
  } else if (ciftlikHayvanlari[index].includes("tavuk")) {
    tavukListesi.push("tavuk");
  } else if (ciftlikHayvanlari[index].includes("domuz")) {
    domuzListesi.push("domuz");
  } else if (ciftlikHayvanlari[index].includes("koyun")) {
    koyunListesi.push("koyun");
  }
}
console.log(
  "Kullanilabilir bacak sayisi: " +
    (inekListesi.length * 4 +
      tavukListesi.length * 2 +
      domuzListesi.length * 4 +
      koyunListesi.length * 4)
);
console.log(
  "Kullanilabilir HELAL bacak sayisi: " +
    (inekListesi.length * 4 + tavukListesi.length * 2 + koyunListesi.length * 4)
);
