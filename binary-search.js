/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    let len = nums.length;
    let start = 0;
    let end = len - 1;
    return binarysearch(nums, target, start, end);   
};

var binarysearch = function(nums, target, start, end){
     if(end >= start){
        let mid = start + Math.floor((end-start)/2);
        
        if (nums[mid] == target){
            return mid;
        }
        else if(nums[mid] > target){
            return binarysearch(nums, target, start, mid-1);
        }
        else{
            return binarysearch(nums, target, mid+1, end);
        }
    }
    return -1;
}

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
