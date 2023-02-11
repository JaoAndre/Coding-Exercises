const memory = {}
const array = []

const removeDuplicates = function (nums) {
    for (const pos in nums) {
        if (memory[nums[pos]]) continue

        array.push(nums[pos])
        memory[nums[pos]] = pos
    }

    console.log(array)
}

removeDuplicates([1, 5, 2, 2, 8, 1, 2, 6, 5, 1])