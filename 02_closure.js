function addString(currentString = '') {
  return function (newString = '') {
    return currentString +=  newString;
  };
};

let concat = addString();

