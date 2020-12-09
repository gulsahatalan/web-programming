// Dun bir köy istasyonunda hazin bir yaralama olay gerceklesti. Supheli ise gelen 10 vagonlu bir trene saklanak olay yerinden kacti.
//10 Tane vagonlu trende vagonun birinde supheli saklanmaktadır. Suphelinin hangi vagonda saklandıgını bulmak icin bir  tahmin programina ihtiyac vardr.

//Program akisi:
//1.  1-10 arası rastgele vagon numarası uretılır ve supheli bu vagonda saklanir.
//2.  Kullanici maximum 4 denemede suphelinin oldugu vagonu bulmasi gerekecektir.
//3.  Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
//4.  Kullanıcının kac defada bildiği  ve puani (100 üzerinden) consola yazdırılacaktir.

let suphelininVagonu = Math.round(Math.random() * 9) + 1;

let result = "suhheli bulundu.TEBRIKLER";

for (let i = 1; i <= 4; i++) {
  let vagonTahmini = prompt(
    "Dun bir köy istasyonunda hazin bir yaralama olayi gerceklesti. Supheli ise gelen 10 vagonlu bir trene saklanak olay yerinden kacti. Suphelinin hangi vagonda saklandıgını bulmaya hazir misin? 1 den 10`a kadar bir sayi gir.1 en ondeki vagonu ,10 ise en arkadaki vagonu temsil etmektedir."
  );

  if (suphelininVagonu == vagonTahmini) {
    if (i == 1) {
      alert("OLAGANUSTU SANS.ILK DENEMEDE BULDUN. TEBRIKLER  100 puan  ");
    } else if (i == 2) {
      alert(" SANSLISIN. 2. DENEMEDE BULDUN. TEBRIKLER  90 puan  ");
    } else if (i == 3) {
      alert(" 3. DENEMEDE BULDUN. TEBRIKLER  80 puan  ");
    } else if (i == 4) {
      alert(" SONUNDA BASARDIN. TEBRIKLER  70 puan  ");
    }

    break;
  } else if (suphelininVagonu < vagonTahmini && i < 4) {
    result = "Supheli on vagonda. Daha kucuk bir sayi denemelisin.";
  } else if (suphelininVagonu > vagonTahmini && i < 4) {
    result = "Supheli arka vagonda.Daha buyuk bir sayi denemelisin.";
  } else if (
    (suphelininVagonu < vagonTahmini || suphelininVagonu > vagonTahmini) &&
    i == 4
  ) {
    result = "Maalesef baska hakkin kalmadi.0 puan.";
  }
  alert(result);
}
