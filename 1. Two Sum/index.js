const twoSum = function (nums, target) {
  const memory = {};

  for (const pos in nums) {
    const complete = target - nums[pos];

    if (memory[complete]) {
      console.log(pos, memory[complete]);
      break;
    }

    memory[nums[pos]] = pos;
  }
};

twoSum([2, 11, 15, 5, 4, 7], 9);