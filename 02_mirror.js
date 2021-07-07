function makeMirrorString (string) {
  if (typeof(string) != 'string') {
    return 'function works with string type'
  }
  let newString = '';
  for(let i = string.length-1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
