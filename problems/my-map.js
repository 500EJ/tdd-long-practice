function myMap(inputArray, callback) {
  const newArr = [];
  inputArray.forEach(el => newArr.push(callback(el)));
  return newArr;
}

module.exports = myMap;
