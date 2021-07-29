let timer;

function asyncTimerWrapper(func, timer) {
  return async function() {
    try {
      let timeOfStart = performance.now();
      timer = 0;
      let result = await func.apply(this, arguments);
      timer = performance.now() - timeOfStart;
      console.log(timer);
      return result
    }
    catch(e) {
      console.log(e);
    }
  }
}

let getUsers = async function func(url) {
  let data = await fetch(url);
  let users = await data.json();
  return users;
}

getUsers = asyncTimerWrapper(getUsers, timer);
getUsers('https://jsonplaceholder.typicode.com/users');
