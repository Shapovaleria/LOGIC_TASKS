function findFactorial(number) {
  if (typeof(number) != 'number') {
    return 'factorial can be found for numbers only'
  };
  if (number == 1) {
    return number 
  };
  return number * findFactorial(number-1);
}