var sortColors = function(nums) {
     let left = 0;
  let right = nums.length - 1;
  let current = 0;
  
  while(current <= right) {
      if(nums[current] === 0) {
          // swap next elements
          [nums[left] , nums[current]] = [nums[current] , nums[left]]
          left++
          current++
          
      }
      else if(nums[current] === 2) {
          // swap last elements
          [nums[right] , nums[current]] = [nums[current] , nums[right]]
          right--
      }
      else{
          current++;
      }
  }
  return nums
};
