function findMiddleValue (array) {
  if (array instanceof (Array) == false || array.length == 0) {
    return `function works with not empty arrays only`
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) != 'number') { return 'function works with numbers'};
    sum += array[i];
  }
  let middleValue = sum/array.length;
  return middleValue;
}
