var removeDuplicates = function(nums) {
    let currentCount = 0;
    let currentNum = nums[0];
    let insertAtIndex = 0;
    debugger
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === currentNum) {
            if (currentCount < 2) {
                nums[insertAtIndex] = nums[i];
                insertAtIndex++;
                currentCount++;
            }
        } else {
            currentNum = nums[i];
            nums[insertAtIndex] = nums[i];
            insertAtIndex++;
            currentCount = 1;
        }
    }

    return insertAtIndex;
};
