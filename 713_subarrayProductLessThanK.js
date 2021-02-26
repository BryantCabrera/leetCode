// Subarray Product Less Than K

// https://leetcode.com/problems/subarray-product-less-than-k/

// 713. Subarray Product Less Than K
// Medium

// 2159

// 83

// Add to List

// Share
// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Note:

// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.


// First Attempt: O(N^2) Time Complexity

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
	let solution = 0;
	
	// Loop through each element in the array.
	for (let i = 0; i < nums.length; i++) {
			let runningProduct = 1;

			// Loop through the integers in the array starting from the current element and determine the runningProduct.
			for (let j = i; j < nums.length; j++) {
					runningProduct *= nums[j];

					if (runningProduct < k) {
							// If the current integer is less than k, that is a valid subarray.
							solution++;
					} else {
							continue;
					}
			}
	}
	
	return solution;
};