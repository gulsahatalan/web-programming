/*Oto yedek parca isi yapan Kerem Bey, toptancilardan aldigi yedek parcalari, kendi envanterine kendi sistemi ile kaydedip, bu parcalari depoya yerlestirirken bir takim süreclerden gecirmek istemektir. Bu süreclerin her biri bir fonksiyon olarak tanimlanacaktir.
Araba parcalari ise bir array icinde verilecektir.

Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.

1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)*/

let arabaParcalari=["fren2","lastik4","tekerlek","tampon","camurluk","aks"];
let parcaList=arabaParcalari.join(",")

//let sayi = a.trim(Number)

//console.log(parcaList.toUpperCase())
 


let buyult =(dizi)=> dizi.toUpperCase();    //buyuk harfe cevrildi

console.log(buyult(parcaList));


let tersCevir=(str)=>str.split( '' ).reverse( ).join( '' );   
    

 console.log (tersCevir(parcaList))     // ters cevrildi


 

