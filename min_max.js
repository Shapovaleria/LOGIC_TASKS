function findMinMax(array) {
  if (array instanceof (Array) == false) {
    return `function works with arrays only`
  }
  else if (array.length < 2) {
    return `length of array is not enough`
  }
  let minElem = array[0];
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) != 'number') { 
      return 'function works with numbers' }
    if (array[i] < minElem) {
      minElem = array[i]
    }
  }
  let maxElem = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i]
    }
  }
  return [minElem, maxElem]
}

