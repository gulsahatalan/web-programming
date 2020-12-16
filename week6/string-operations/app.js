//1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
//ornek: “asik veysel“ ==> “Asik Veysel“
let name = "gulsah atalan"

let newNameList= name.split(" ") ;

for (index=0; index < newNameList.length ; index ++){
   newNameList[index] =newNameList[index].charAt(0).toUpperCase()+newNameList[index].slice(1)
   
}
console.log (newNameList.join (" "))

//2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)
let next=[];
for (sayiIndexi=1; sayiIndexi<=100 ; sayiIndexi++){
    
    next.push (sayiIndexi)
    if (sayiIndexi%10==0) {
        next.push("\n")
    }
 
    
}
console.log(next.join(","))


// 3)  0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
//bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....


let asal =[];
let sayac =[];
for (sayiIndexi=1; sayiIndexi<100 ; sayiIndexi++){
  
    for ( bolenIndexi=1; bolenIndexi<=sayiIndexi; bolenIndexi ++){
        
        if (sayiIndexi % bolenIndexi==0 ){
            sayac++
            
            if(sayac.length==1  ){
         
                asal.push (sayac)}
            
            }
         
        }
    
}

console.log(asal)

let asal=[1]
let prime,numbers
for (let prime = 2; prime <=100; prime++) {
    let calc=true;
    for (let numbers = 2; numbers < prime; numbers++) {
       if (prime%numbers==0) {
           calc=false;
           break
       }
        
    }if(calc){
        asal.push(prime);
    }
    
}
console.log(asal)


//4)  Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 

function rasteleSembol(uzunluk, semboller) {
    var maske = '';
    if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
    if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (semboller.indexOf('0') > -1) maske += '0123456789';
    if (semboller.indexOf('#') > -1) maske += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var sonuc = '';

    for (var i ; i > 0; --i) 
    {
    sonuc += maske[Math.floor(Math.random() * maske.length)];
    }
    return  sonuc;
}
   
//Örnek Kullanım

    console.log(rasteleSembol(1, 'aA')); //rastgele harf üretir.
    console.log(rasteleSembol(4, '0#')); //4 basamaklı sayı ve sembollerden üretilir.
    console.log(rasteleSembol(8, 'aA')); //8 basamaklı küçük büyük harflerin tamamı
    console.log(rasteleSembol(5, '#aA'));//5 basamaklı büyük küçük ve sayılardan üretilir.

    const lowerCase ='abcdefghijklmnopqrstuvwxyz';
    const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers='0123456789';
    const symbol='~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    const totalCharacters=lowerCase+upperCase+numbers+symbol;
  //  console.log(totalCharacters)

 
    

    

    

//5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
​
//*
//**
//***
//****
//*****
//******

for (index=1; index<7 ; index ++){
    console.log ("*".repeat(index))
}