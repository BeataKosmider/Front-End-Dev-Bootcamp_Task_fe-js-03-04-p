function filterItems(arr1, arr2) {
  const arrNew = arr1.concat(arr2);
  const arrNewFiltered = arrNew.filter((item, _key) => item > 0);
  return arrNewFiltered;
  // Zaimplementuj zadanie zgodnie z wytycznymi
}

module.exports = filterItems;
