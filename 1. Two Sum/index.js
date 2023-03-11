const twoSum = function (nums, target) {
  const memory = {};

  for (const pos in nums) {
    const complete = target - nums[pos];

    if (memory[complete]) {
      return [pos, memory[complete]];
    }

    memory[nums[pos]] = pos;
  }
};

console.log(twoSum([2, 11, 15, 5, 4, 7], 9));