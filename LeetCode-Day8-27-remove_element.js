/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let secondPointer = nums.length - 1;
    for (let i = 0; i <= secondPointer; i++) {
        if (nums[i] === val) {
            let temp = nums[i];
            nums[i] = nums[secondPointer];
            nums[secondPointer] = temp;
            secondPointer--; 
            i--; 
        }
    }
    return secondPointer + 1;
};
