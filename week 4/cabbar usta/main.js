const AracRengi = "siyah"
const AracMarkasi = "BMW"
const AracinModeli = 2018
const DaimiMusteriOlunanSure = 4



if(DaimiMusteriOlunanSure>=5)
{
console.log ("Buyrun, degerli musterimiz nasil yardimci olabilirim? ")
}
else if (AracMarkasi=="VW" && AracinModeli<2018 && AracinModeli>2001 && AracRengi=="siyah")
{
console.log ("VW ozel tasarim.Size nasil yardimci olabilirim?")    
}
else if (AracMarkasi=="BMW" && AracRengi=="kirmizi" && AracinModeli<2019 && AracinModeli>2010)
{
console.log ("BMW 2010-2019  .Size nasil yardimci olabilirim?")    
}
else if (AracMarkasi=="BMW" && AracRengi=="siyah" && AracinModeli>=2020)
{
console.log ("BMW yeni model .Size nasil yardimci olabilirim?")    
}
else if (AracMarkasi=="AUDI"  && (AracRengi=="siyah"||AracRengi=="kirmizi") && 
((AracinModeli<2010 && AracinModeli >2005)|| (AracinModeli<2020 && AracinModeli >2014)))
{   
console.log ("AUDI guzel secim.Size nasil yardimci olabilirim?")    
}
else {
console.log ("maalesef hizmet veremiyoruz")   
}
