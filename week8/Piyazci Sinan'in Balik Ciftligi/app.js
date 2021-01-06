const fishFarm = [
  {
    fishType: "Salmon",
    price: 15.7,
    entryDate: new Date(2021, 0, 1), // 01.01.2021
    durationInDays: 30,
    itemWeightInGrams: 145,
    originCountry: "Norway",
    season: "Winter",
    stockVolumeInKg: 6500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Seatrout",
    price: 7.9,
    entryDate: new Date(2021, 11, 12), // 12.12.2021
    durationInDays: 20,
    itemWeightInGrams: 460,
    originCountry: "Japan",
    season: "Winter",
    stockVolumeInKg: 1600,
    saleLocations: ["GL", "GR", "BE", "VS"],
  },
  {
    fishType: "Sailfish",
    price: 5.2,
    entryDate: new Date(2021, 3, 19),
    durationInDays: 15,
    itemWeightInGrams: 240,
    originCountry: "United Kingdom",
    season: "Spring",
    stockVolumeInKg: 500,
    saleLocations: ["ZH", "SH", "BL", "SO"],
  },
  {
    fishType: "Red Drum",
    price: 3.1,
    entryDate: new Date(2021, 5, 15),
    durationInDays: 18,
    itemWeightInGrams: 300,
    originCountry: "Poland",
    season: "Summer",
    stockVolumeInKg: 15500,
    saleLocations: ["FR", "GE", "NE", "TI"],
  },
  {
    fishType: "Pompano",
    price: 10,
    entryDate: new Date(2021, 8, 17),
    durationInDays: 20,
    itemWeightInGrams: 645,
    originCountry: "France",
    season: "Autumn",
    stockVolumeInKg: 1500,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Bluefish",
    price: 13.7,
    entryDate: new Date(2021, 10, 11),
    durationInDays: 5,
    itemWeightInGrams: 845,
    originCountry: "Italy",
    season: "Winter",
    stockVolumeInKg: 200,
    saleLocations: ["NW", "OW", "UR", "LU"],
  },
  {
    fishType: "Mackerel",
    price: 8.9,
    entryDate: new Date(2021, 6, 18),
    durationInDays: 16,
    itemWeightInGrams: 150,
    originCountry: "GREECE",
    season: "Summer",
    stockVolumeInKg: 8100,
    saleLocations: ["AG", "BL", "BE", "VD", "TG"],
  },
  {
    fishType: "Perch",
    price: 11.9,
    entryDate: new Date(2021, 10, 1),
    durationInDays: 30,
    itemWeightInGrams: 222,
    originCountry: "Egypt",
    season: "Summer",
    stockVolumeInKg: 9500,
    saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
  },
  {
    fishType: "Mullet",
    price: 4.8,
    entryDate: new Date(2021, 2, 14),
    durationInDays: 30,
    itemWeightInGrams: 333,
    originCountry: "Vietnam",
    season: "Summer",
    stockVolumeInKg: 600,
    saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  {
    fishType: "Tuna",
    price: 19.5,
    entryDate: new Date(2021, 0, 1),
    durationInDays: 30,
    itemWeightInGrams: 250,
    originCountry: "Spain",
    season: "Winter",
    stockVolumeInKg: 2300,
    saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
  },
];

//1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
console.log("***stok miktari 500 kg dan fazla olan baliklar***");
showName(findBiggerThan(fishFarm, 500));

//2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
console.log("***9 ile 12 Fr.arasindaki baliklar***");
showName(findBetween(fishFarm, 9, 12));

//3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
console.log("***BERN de kis sezonu satilan baliklar***");
showName(findBernWinter(fishFarm));

//4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
console.log("***son kullanma tarihi yaklasan baliklar***");
let newListToSort = findExpirationDate(fishFarm).sort(
  (a, b) => a.PullDate.getTime() - b.PullDate.getTime()
);
console.log(newListToSort);

//5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
console.log("***AB den gelen ve 10 fr ucuz olan baliklar***");
showName(findFromAB(fishFarm, 10));

//6) Toplam balik stoku ne kadardir?
console.log("***toplam balik stogu***");
console.log(findTotalStock(fishFarm));

//7) En pahali olan balik hangisidir?
console.log("***en pahali balik***");
showName(findExpensiveFish(fishFarm));

//8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
console.log("***en uzun sureli durabilen baliklar***");
showCountry(findLongerDuration(fishFarm));

//9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
console.log(
  "***Kis ve sonbahar sezonu swiss romande satilan baliklarin ortalama fiyati***"
);
console.log(findAverage(findSwissPrice(fishFarm)));

//10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
console.log("***Ticino Kantonu icin toplam balik stogu***");
console.log(findTicinoStock(fishFarm));

//11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
console.log(
  "***Yazlik sezonda ve AB disindan gelen ve swiss romande satilan baliklarin ortalama fiyati***"
);
console.log(findAverage(findSwissPrice(fishFarm)));
