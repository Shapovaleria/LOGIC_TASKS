const arr = [ { id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }];

let map = new Map;
let set = new Set;

function deleteDuplication (arr) {
  for (let i = 0; i < arr.length; i++){
    map.set(arr[i], arr[i].id)
  }
  
  for (let value of map.values()) {
    set.add(value)
  }
  
  let newArr = [];
  
  for (value of set) {
    for (let i = 0; i < arr.length; i++) {
      if (value == arr[i].id) {
        newArr.push(arr[i])
        break;
      }
    }
  }
  return newArr;
}

