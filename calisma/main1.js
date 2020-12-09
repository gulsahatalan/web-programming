
//let ogrenciDizisi =["habil","sali","hamide","salih"]
//console.log (ogrenciDizisi[3]) ="halis";


//let haftaninGunleri = ["pazartesi","sali","carsamba","persembe","cuma","cumartesi","pazar"]



// aylar = new Array ("ocak","subat","mart")
//let sayilar = [1,2,3,4,5,6,7,8,9]
//console.log (sayilar[0])
//console.log (sayilar[4])
//console.log (sayilar[8])



let ogrenciler = [90,80,70,80,60,40,60,70,80];
let diziUzunlugu=ogrenciler.length;

//let suphelininVagonu=Math.round(Math.random() * 9)+1 ; 
//console .log (suphelininVagonu)

let ogrencilerinNotlari = [100, 90, 80, 40, 50, 60, 70, 80, 90, 100];
function minDeger(ogrencilerinNotlari) {
  return Math.min.apply(null, ogrencilerinNotlari);
}
console.log(minDeger(ogrencilerinNotlari));
