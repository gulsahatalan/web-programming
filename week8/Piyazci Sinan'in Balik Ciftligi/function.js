/**
 * stok miktari belli bir kg ustunde olanlari bulan fonksiyon
 * @param {*} parray
 * @param {*} pKg
 */
function findBiggerThan(parray, pKg) {
  let result = parray.filter(
    (stockAmount) => stockAmount.stockVolumeInKg > pKg
  );
  return result;
}

/**
 * verilen bir arrayde baligin ismini veren fonksiyon
 * @param {*} pArray
 */
function showName(pArray) {
  pArray.map((type) => console.log(type.fishType));
}

/**
 * belli bir fiyat araligindeki baliklari bulan fonksiyon
 * @param {*} pArray
 * @param {*} pLower
 * @param {*} pUpper
 */
function findBetween(pArray, pLower, pUpper) {
  let cheaperFish = pArray.filter(
    (cheapFish) => (cheapFish.price < pUpper) & (cheapFish.price > pLower)
  );
  return cheaperFish;
}

/**
 * Sadece Bern'de ve kis sezonu satilan baliklari bulan fonksiyon
 * @param {*} pArray
 */
function findBernWinter(pArray) {
  let winterInBern = pArray.filter(
    (winterBern) =>
      (winterBern.season == "Winter") & winterBern.saleLocations.includes("BE")
  );
  return winterInBern;
}

/**
 * son kullanma tarihini bulan fonksiyon
 * @param {*} pArray
 */
function findExpirationDate(pArray) {
  let newList = [];
  pArray.map((fish) => {
    fish.entryDate.setDate(fish.entryDate.getDate() + fish.durationInDays);
    newList.push({ PullDate: fish.entryDate, fishType: fish.fishType });
  });
  return newList;
}

/**
 * AB den gelen ve 10 fr ucuz olan baliklari veren fonksiyon
 * @param {*} pArray
 * @param {*} pLimit
 */
function findFromAB(pArray, pLimit) {
  let fromAB = pArray.filter(
    (type) =>
      (type.originCountry == "Poland" ||
        type.originCountry == "France" ||
        type.originCountry == "Italy" ||
        type.originCountry == "GREECE" ||
        type.originCountry == "Spain") &
      (type.price < pLimit)
  );
  return fromAB;
}

/**
 * toplam balik stogunu veren fonksiyon
 * @param {*} pArray
 */
function findTotalStock(pArray) {
  let stokckList = pArray.map((type) => type.itemWeightInGrams);
  return stokckList.reduce((a, b) => {
    return a + b;
  });
}
/**
 * en pahali baliklari veren fonksiyon
 * @param {*} pArray
 */
function findExpensiveFish(pArray) {
  let highPrice = Math.max.apply(
    Math,
    pArray.map(function (fish) {
      return fish.price;
    })
  );
  let highPriceList = pArray.filter((fish) => fish.price == highPrice);
  return highPriceList;
}

/**
 * en uzun sureli durabilen baliklari veren fonksiyon
 * @param {*} pArray
 */
function findLongerDuration(pArray) {
  let durationDay = Math.max.apply(
    Math,
    pArray.map(function (fish) {
      return fish.durationInDays;
    })
  );
  let durationDayList = pArray.filter(
    (fish) => fish.durationInDays == durationDay
  );
  return durationDayList;
}

/**
 * ulke adini veren fonksiyon
 * @param {*} pArray
 */
function showCountry(pArray) {
  pArray.map((type) => console.log(type.originCountry));
}

/**
 * kis ve sonbahar sezonu icin fransiz kantonundakileri veren fonksiyon
 * @param {*} pArray
 */
function findSwissPrice(pArray) {
  let swissPrice = pArray.filter(
    (swiss) =>
      (swiss.season == "Winter" || swiss.season == "Autumn") &
      swiss.saleLocations.includes("VD")
  );
  let swissPriceList = swissPrice.map((type) => type.price);
  return swissPriceList;
}

/**
 * ortalamayi veren fonksiyon
 * @param {*} pArray
 */
function findAverage(pArray) {
  let sum = pArray.reduce((a, b) => {
    return a + b;
  });
  let average = sum / pArray.length;
  return average;
}
/**
 * ticinodaki toplam stogu veren fonksiyon
 * @param {*} pArray
 */
function findTicinoStock(pArray) {
  let saleInTicino = pArray.filter((ticino) =>
    ticino.saleLocations.includes("TI")
  );
  let ticinoStokckList = saleInTicino.map((type) => type.stockVolumeInKg);
  return ticinoStokckList.reduce((a, b) => {
    return a + b;
  });
}

/**
 * Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklari veren fonksiyon
 * @param {*} pArray
 */
function findImported(pArray) {
  let summerImport = pArray.filter(
    (type) =>
      (type.season == "Summer") &
      type.saleLocations.includes("ZH") &
      (type.originCountry == "Norway" ||
        type.originCountry == "Japan" ||
        type.originCountry == "United Kingdom" ||
        type.originCountry == "Egypt" ||
        type.originCountry == "Vietnam")
  );
  let weightList = summerImport.map((type) => type.itemWeightInGrams);
  return weightList;
}
