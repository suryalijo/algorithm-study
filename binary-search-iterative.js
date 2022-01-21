/**
Time complexity : O(logN).
Space complexity : O(1) since it's a constant space solution.
A recursive solution will have a space complexity of o(log n). Iterative solution is better here than a recursive solution. 
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target){
    let start = 0;
    let end = nums.length - 1;
    
     while(start <= end){
        let mid = start + Math.floor((end-start)/2);
        
        if (nums[mid] == target){
            return mid;
        }
        else if(nums[mid] > target){
            end = mid -1;
        }
        else{
            start = mid +1;
        }
    }
    return -1;
}
