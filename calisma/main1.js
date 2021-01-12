let obj;
function upDate (previewPic){ 
  document.getElementById(image).innerHTML= previewPic.alt;
document.getElementById(image).style.background="url(` "+previewPic.src+" ` )" ;
}
function unDo () {
  let oldAlt ="HELLO"
  document.getElementById(image).innerHTML= oldAlt;
  document.getElementById(image).style.background="#8e68ff " ;
document.getElementById(image).style.backgrounImage="url("+picture.src+")";
}



/*
let OverStockList=[]      
fishFarm.filter((fish)=>{
    if(fish.stockVolumeInKg>500)
    OverStockList.push(fish.fishType);
})
console.log(OverStockList)
*/
let result=fishFarm.filter(stockAmount=>( stockAmount.stockVolumeInKg>500))
result.map((type)=>{console.log(type.fishType);