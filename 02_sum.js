function findSumToNumber(number) {
  if (typeof (number) != 'number') {
    return 'the sum can be found for numbers only'
  };
  if (number == 0) {
    return number;
  }
  else if (number > 0) {
    return number + findSumToNumber(number - 1)
  }
  else if (number < 0) {
    return number + findSumToNumber(number + 1)
  }
}
