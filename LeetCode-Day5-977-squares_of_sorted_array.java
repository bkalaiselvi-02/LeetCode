class Solution {
    public int[] sortedSquares(int[] arr) {
         if (arr.length == 0) {
            throw new IllegalArgumentException("Please enter an array of length");
        }
        int left = 0; 
        int right = arr.length - 1; 
        int pos = right;
        int[] resultArr = new int[arr.length]; 
        
       while (left <= right) {
           int leftSquare = arr[left] * arr[left];
           int rightSquare = arr[right] * arr[right];
            if (leftSquare > rightSquare) {
                resultArr[pos] = leftSquare;
                left++;
            } else {
                resultArr[pos] = rightSquare;
                right--;
            }
            pos--;
        }
        
       return resultArr;
    }
}
