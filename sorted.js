function checkIfSorted(array) {
  if (
    array instanceof (Array) == false || 
    array.length == 0
  ) {
    return `function works with not empty arrays only`
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) != 'number') { 
      return 'function works with numbers'};
    if (array[i] < array[i+1]) {
      return true
    }
    else return false;
  }
}
