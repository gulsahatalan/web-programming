let pArray = [10, 90, 80, 140, 50, 60, 70, 80, 90, 10];

//karekokunu hesaplama
for (let i = 0; i < pArray.length; i++) {
  let karekok = Math.sqrt(pArray[i]);
  console.log(`${pArray[i]} sayisinin karekoku ${karekok}`);
}

//karesini hesaplama

for (let i = 0; i < pArray.length; i++) {
  console.log(
    pArray[i] +
      "sayisinin karesi " +
      pArray[i] * pArray[i]
  );
}

//tüm sayilarin toplamini hesaplama

let toplam = 0;
for (let i = 0; i < pArray.length; i++) {
  toplam = toplam + pArray[i];
}
console.log("sayilar toplami: " + toplam);
//ortalamasini hesaplama

console.log("sayilarin ortalamasi: " + toplam / pArray.length);

//en büyük sayiyi bulma

let enBuyuk = pArray[0];
result = enBuyuk;
for (let i = 0; i <= pArray.length; i++) {
  if (pArray[i] >= enBuyuk) {
    enBuyuk = pArray[i];
    result = pArray[i];
  }
}
console.log("En buyuk deger:" + result);

// en kücük sayiyi bulma

let enKucuk = pArray[0];
result = enKucuk;
for (let i = 0; i <= pArray.length; i++) {
  if (pArray[i] <= enKucuk) {
    enKucuk = pArray[i];

    result = pArray[i];
  }
}
console.log("En kucuk deger:" + result);
