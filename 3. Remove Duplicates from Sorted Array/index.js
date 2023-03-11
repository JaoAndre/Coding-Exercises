const removeDuplicates = function (nums) {
  const memory = {};
  const array = [];

  for (const pos in nums) {
    if (memory[nums[pos]]) continue;

    array.push(nums[pos]);
    memory[nums[pos]] = true;
  }

  return array;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));