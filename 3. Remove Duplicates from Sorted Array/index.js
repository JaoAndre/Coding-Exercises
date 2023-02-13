const removeDuplicates = function (nums) {
    const memory = {}
    const array = []

    for (const pos in nums) {
        if (memory[nums[pos]]) continue

        array.push(nums[pos])
        memory[nums[pos]] = pos
    }

    console.log(array)
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])