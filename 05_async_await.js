function wait() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
}

async function f() {
  try {
    let data = await wait();
    console.log(data)
  }
  catch(e) {
    console.log(e)
  }
  finally {
    console.log('Promise complete')
  }
}

f();
