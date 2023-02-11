let memory = {}

var twoSum = function (nums, target) {
    for (const pos in nums) {
        let complete = target - nums[pos]
        if (memory[complete]) {
            console.log(pos, memory[complete])
            break;
        } else {
            memory[nums[pos]] = pos
        }
    }
}

twoSum([2, 11, 15, 7], 9)