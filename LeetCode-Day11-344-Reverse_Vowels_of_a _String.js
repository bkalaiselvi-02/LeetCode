var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u']);
    const arr = s.split("");
    let left = 0; 
    let right = arr.length - 1;

    while (left < right) {
        if (!vowels.has(arr[left].toLowerCase())) {
            left++;
            continue;
        }
        if (!vowels.has(arr[right].toLowerCase())) {
            right--;
            continue;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join("");
};
