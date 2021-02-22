// Maximum Product Subarray

// https://leetcode.com/problems/maximum-product-subarray/

// 152. Maximum Product Subarray
// Medium

// 6236

// 205

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	// Keep track of the positive max, negative max, and globalMax as we traverse the array.
	// Because the nums array is guaranteed to have a length of at least 1, we can initialize the variables with the first element of the array.
	// Initializing to one is preferred because 1 times a number is the number.
	let positiveGlobalMax = 1;
	let negativeGlobalMax = 1;
	let globalMax = nums[0];
	
	// Loop through each element in the array.
	for (let i = 0; i < nums.length; i++) {
			let temp = positiveGlobalMax;
			
			
			// We have to account for both the positiveGlobalMax and negativeGlobalMax because if the current integer is negative, multiplying it by the current negativeGlobalMax could yield a greater product.
			// The positiveGlobalMax is the maximum of either just taking the current number at the index or multiplying the current number to (the running positive max product or running negative max product).
			positiveGlobalMax = Math.max(nums[i], Math.max(nums[i] * positiveGlobalMax, nums[i] * negativeGlobalMax));
			// Conversely, the negativeGlobalMax is the min of either just taking the current number at the index or multiplying it by either the postive max or current negative max.  This accounts for the scenarios when the current integer is positive and when it is negative.
			negativeGlobalMax = Math.min(nums[i], Math.min(nums[i] * temp, nums[i] * negativeGlobalMax));
			
			// If the positiveGlobalMax is greater than the globalMax, we have found a new globalMax, so reassign the variable.    
			globalMax = Math.max(globalMax, positiveGlobalMax);
	}
	
	return globalMax;
};