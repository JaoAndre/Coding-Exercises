const countOdds = function (low, high) {
  let counts = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) counts++;
  }

  return counts;
};

console.log(countOdds(3, 7));