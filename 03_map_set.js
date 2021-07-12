const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }];

let setOfId = new Set;
let newArr = []

function deleteDuplication(arr) {
  for (let i = 0; i < arr.length; i++) {
    setOfId.add(arr[i].id);
  }
  let newArr = Array.from(setOfId, function (n) {
    return { id: n }
  });
  return newArr
}


