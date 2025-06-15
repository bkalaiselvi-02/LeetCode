 class Solution {
    public int findNumbers(int[] nums) {
         if (nums == null || nums.length == 0) {
            throw new IllegalArgumentException("Input array must not be empty.");
        }

        int count = 0;
        for (int num : nums) {
            int digits = String.valueOf(num).length();
            if (digits % 2 == 0) {
                count++;
            }
        }

        return count;
        
    }
}


class Solution {
    public int findNumbers(int[] nums) {
        
        int count=0;
        
        for(int i =0 ; i< nums.length; i++){
            
            if((nums[i]>9 && nums[i]<100) || (nums[i]>999 && nums[i]<10000) || nums[i]==100000){
                count++;
            }
        }
        
        return count;
        
    }
}
