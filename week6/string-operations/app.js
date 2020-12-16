//1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.

let name = "gulsah atalan";
let newNameList = name.split(" ");
for (index = 0; index < newNameList.length; index++) {
  newNameList[index] =
    newNameList[index].charAt(0).toUpperCase() + newNameList[index].slice(1);
}
console.log(newNameList.join(" "));

//2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)

let next = [];
for (sayiIndexi = 1; sayiIndexi <= 100; sayiIndexi++) {
  next.push(sayiIndexi);
  if (sayiIndexi % 10 == 0) {
    next.push("\n");
  }
}
console.log(next.join(","));

// 3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
//bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....

let asal = [];
for (let index = 2; index <= 100; index++) {
  let sayiAsalMi = 0;
  for (let numbers = 2; numbers < index; numbers++) {
    if (index % numbers == 0) {
      sayiAsalMi++;
      break;
    }
  }
  if (sayiAsalMi == 0) {
    asal.push(index);
  }
}
console.log(asal);

//4)  Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz.

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbol = "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
const totalCharacters = lowerCase + upperCase + numbers + symbol;
for (let index = 0; index < 50; index++) {
  let password = "";
  let randNo = Math.floor(Math.random() * (16 - 8)) + 8;
  for (let karakterIndeksi = 0; karakterIndeksi < randNo; karakterIndeksi++) {
    let randomNumber = Math.floor(Math.random() * totalCharacters.length);
    password = password + totalCharacters.substr(randomNumber, 1);
  }
  console.log(password);
}

//5) sekli programlama yapilarini kullanarak cizdiriniz.

for (index = 1; index < 7; index++) {
  console.log("*".repeat(index));
}
