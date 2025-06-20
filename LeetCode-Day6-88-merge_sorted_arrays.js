var merge = function(nums1, m, nums2, n) {
    let firstPointer = m - 1;
    let secondPointer = n - 1;
    let i = m + n - 1;

    while(secondPointer >= 0) {
        let firstPointerVal = nums1[firstPointer];
        let secondPointerVal = nums2[secondPointer];
        if(firstPointerVal > secondPointerVal) {

            nums1[i] = firstPointerVal;
            firstPointer--;
            i--;
        }
        else{
            nums1[i] = secondPointerVal;
            secondPointer--;
            i--;
        }
    }
   return nums1;
};
