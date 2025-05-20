var dominantIndex = function (nums) {
    const max = Math.max(...nums);
    const maxIndex = nums.indexOf(max)
    nums = nums.filter(num => num !== max)
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i] * 2;
        if (max < currentValue) {
            return -1
        }
    }
    return maxIndex
};

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1, 2, 3, 4]))
