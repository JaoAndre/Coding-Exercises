const mergeTwoLists = function (listOne, listTwo) {
  const array = [];
  let a = 0;
  let b = 0;

  for (let i = 0; i < listOne.length + listTwo.length; i++) {
    if (a >= listOne.length) {
      array.push(listTwo[b++]);
      continue;
    }

    if (b >= listTwo.length) {
      array.push(listOne[a++]);
      continue;
    }

    if (listOne[a] < listTwo[b]) {
      array.push(listOne[a++]);
    } else {
      array.push(listTwo[b++]);
    }
  }

  return array;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));