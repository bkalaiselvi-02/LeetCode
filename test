var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxVolume = 0;
    while (left < right) {
        const lheight = height[left];
        const rheight = height[right];
        const volume = Math.min(lheight, rheight) * (right - left);
        if (volume > maxVolume)
            maxVolume = volume;
        if (lheight >= rheight)
            right--;
        else
            left++;
    }
    return maxVolume;
};
