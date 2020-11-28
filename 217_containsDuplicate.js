// Contains Duplicate

// https://leetcode.com/problems/contains-duplicate/

// 217. Contains Duplicate
// Easy

// 1230

// 796

// Add to List

// Share
// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	// Sort the array.
	nums.sort();
	
	let result = false;
	
	for (let i = 0; i < nums.length; i++) {
			// If we are at the first element, there is nothing to check it against.
			if (i === 0) continue;
			
			if (nums[i] === nums[i - 1]) {
					result = true;
					break;
			}
	}
	
	return result;
};