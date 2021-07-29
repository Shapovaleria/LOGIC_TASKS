let timer;

function timerWrapper(func, timer) {
  return function() {
    let timeOfStart = performance.now();
    timer = 0;
    let result = func.apply(this, arguments);
    timer = performance.now() - timeOfStart;
    console.log(timer)
    return result
  }
}
 
let findSquare = function func() {
  let newArr = [];
  for (let i = 0; i < 100000; i++){
    newArr.push(Math.sqrt(i)) ;
  }
  return newArr;
}

findSquare = timerWrapper(findSquare, timer);
findSquare();
