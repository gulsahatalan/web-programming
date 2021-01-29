// Bu aplikasyonda basit okul kayit sistemi olusturulacaktir.

// Kullanici ;

// -Ekranin sol tarafinda olacak bir form araciligi ile kayit yapabilecektir.(adi, soyadi, yasi ..vs bilgilerle)
//-Kaydettigi  ogrencilerin listesini ise sayfanın sag tarafında görebilecektir.
// -Gerektiginde kayitli ogrenciyi silebilecektir.    
 //-Listenin en altında ise toplam ogrenci sayisini görebilecektir.

// ** Asagidaki islemler uygulanacaktir.**

//  1) form innerHTML ile olusturulur.
//  2) form araciligi ile gelen input bir array de saklanir.
//  3) input arrayindeki bilgilerle kayitli ogrenci listesi olusturulur.
//  4) Kayit butonuna add event listener eklenip butona basildiginda kayitli ogrenciler tablosu sag tarafa yazdirilir.
//  5) Kayitli ogrenci tablosunun atasina add event listener eklenip sadece delete te calismasi saglanir.
//  6) delete basildiginda kayitli ogrenci listesinden o elemani cikartan fonksiyon yazilir add event listener a eklenir.
//  7) toplam ogrenci sayisini veren ve ekrana yazdiran fonksiyon yazilir.

let newStudentList = [];
document.querySelector("#form").innerHTML = showForm();
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", (event) => {
    showNewStudentTable();
    writeInner();
  });
});
document.querySelector("#registerList").addEventListener("click", (event) => {
  if (event.target.className == "delete") {
    removeFromList(event.target.id);
  }
});
