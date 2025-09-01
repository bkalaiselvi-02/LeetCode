var removeElement = function(nums, val) {
     if(!nums.length) return [];
   
    let left = 0;
    let right = nums.length -1 ;
    while(left <= right) {
        if(nums[left] === val) {
            if(nums[right] === val) {
                right--
                continue;
            }
                [nums[left] , nums[right]] = [nums[right] , nums[left]]
                left++
                right--
        }
        else{
              left++
        }
       
    }
    return left
};
