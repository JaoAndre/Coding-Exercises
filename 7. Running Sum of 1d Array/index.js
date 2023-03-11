const runningSum = function (nums) {
  const array = [];
  let sum = 0;

  for (const num of nums) {
    sum += num;
    array.push(sum);
  }

  return array;
};

console.log(runningSum([3, 1, 2, 10, 1]));