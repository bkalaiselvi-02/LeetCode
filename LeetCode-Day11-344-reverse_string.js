var reverseString = function(s) {
    if(!s.length)  return []
    let left = 0;
    let right = s.length - 1;
    while(left <= right) {
        [s[left] , s[right]] = [s[right] , s[left]];
        left++
        right--
    }
    return s
};
