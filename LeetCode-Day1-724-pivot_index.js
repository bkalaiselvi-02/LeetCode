var pivotIndex = function (nums) {
    const total = nums.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    let sumLeft = 0;

    for (let i = 0; i < nums.length; i++) {
        const sumRight = total - sumLeft - nums[i];

        if (sumLeft === sumRight) {
            return i
        }

        sumLeft += nums[i]
    }
    return -1
};
