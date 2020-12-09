let ogrencilerinNotlari = [100, 90, 80, 40, 50, 60, 70, 80, 90, 100];

//karekokunu hesaplama
for (let i = 0; i < ogrencilerinNotlari.length; i++) {
  let karekok = Math.sqrt(ogrencilerinNotlari[i]);
  console.log(`${ogrencilerinNotlari[i]} sayisinin karekoku ${karekok}`);
}

//karesini hesaplama

for (let i = 0; i < ogrencilerinNotlari.length; i++) {
  console.log(
    ogrencilerinNotlari[i] +
      "sayisinin karesi " +
      ogrencilerinNotlari[i] * ogrencilerinNotlari[i]
  );
}

//tüm sayilarin toplamini hesaplama

let toplam = 0;
for (let i = 0; i < ogrencilerinNotlari.length; i++) {
  toplam = toplam + ogrencilerinNotlari[i];
}
console.log("sayilar toplami: " + toplam);
//ortalamasini hesaplama

console.log("sayilarin ortalamasi: " + toplam / ogrencilerinNotlari.length);

//en büyük sayiyi bulma

let enBuyuk = ogrencilerinNotlari[0];
result = enBuyuk;
for (let i = 0; i <= ogrencilerinNotlari.length; i++) {
  if (ogrencilerinNotlari[i] > enBuyuk) {
    result = ogrencilerinNotlari[i];
  }
}
console.log("En buyuk deger:" + result);

// en kücük sayiyi bulma

let enKucuk = ogrencilerinNotlari[0];
result = enKucuk;
for (let i = 0; i <= ogrencilerinNotlari.length; i++) {
  if (ogrencilerinNotlari[i] <= enKucuk) {
    enKucuk = ogrencilerinNotlari[i];

    result = ogrencilerinNotlari[i];
  }
}
console.log("En kucuk deger:" + result);
