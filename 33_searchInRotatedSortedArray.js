// Search in Rotated Sorted Array

// https://leetcode.com/problems/search-in-rotated-sorted-array/

// 33. Search in Rotated Sorted Array
// Medium

// 6740

// 599

// Add to List

// Share
// You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104


// Binary Search Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	// Implement Binary Search
	let start = 0;
	let end = nums.length - 1;
	
	while (start <= end) {
			const median = Math.floor((start + end) / 2);
			
			// If we have found our target, returnn its index.
			if (nums[median] === target) return median;
			
			if (nums[start] <= nums[median]) {
					// We are in the part of the array that is not rotated.
					if (nums[start] <= target && nums[median] >= target) {
							// If the target is within this sorted part, continue the binary search in this part of the array.
							end = median - 1;
					} else {
							// If the target is not within this sorted part, continue the binary search in the other part of the array.
							start = median + 1;
					}  
			} else {
					// We are in part of the array that contains the pivot.
					if (nums[median] < target && nums[end] >= target) {
							// If the target is within this pivoted part, continue the binary search in this part of the array.
							start = median + 1;
					} else {
							// If the target is nnot within this pivoted part, continue the binary search in the other part of this array.
							end = median - 1;
					}
			}
	}
	
	// If we have still not found the number, it is not present in the array.
	return - 1;
};


// Unoptimized Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) { 
	return nums.indexOf(target);
};