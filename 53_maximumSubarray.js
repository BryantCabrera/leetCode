// Maximum Subarray

// https://leetcode.com/problems/maximum-subarray/

// 53. Maximum Subarray
// Easy

// 10878

// 520

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [0]
// Output: 0
// Example 4:

// Input: nums = [-1]
// Output: -1
// Example 5:

// Input: nums = [-100000]
// Output: -100000
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	// Keep track of the currentMax and globalMax as we traverse the array.
	// Because the nums array is guaranteed to have a length of at least 1, we can initialize the variables with the first element of the array.
	let currentMax = nums[0];
	let globalMax = nums[0];
	
	// Loop through each element in the array.
	// Because we initalized the variables above with the first element in the nums array, we can start our loop at index 1.
	for (let i = 1; i < nums.length; i++) {
			// The currentMax is the maximum of either just taking the current number at the index or adding the current number to the running sum.
			currentMax = Math.max(nums[i], nums[i] + currentMax);
			
			// If the currentMax is greater than the globalMax, we have found a new globalMax, so reassign the variable.
			if (currentMax > globalMax) {
					globalMax = currentMax;
			}
	}
	
	return globalMax;
};