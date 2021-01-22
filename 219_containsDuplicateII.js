// Contains Duplicate II

// https://leetcode.com/problems/contains-duplicate-ii/

// 219. Contains Duplicate II
// Easy

// 1166

// 1293

// Add to List

// Share
// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	for (let i = 0; i < nums.length; i++) {
			// It is ok to have j start at i + 1 here without bound checks because if i === nums.length, than j would be greater than nums.lenth and the conditional would prevent the loop from starting.
			for (let j = i + 1; j < nums.length; j++) {
					// If the absolute value of the difference between j and i is greater than k, there is no need to check the rest of the elements after nums[j].
					if (Math.abs(j - i) > k) break;
							
					// If both numbers are equal and the absolute value of the difference between j and i is less than or equal to k, than we have satisfied the conditions for a "nearby duplicate".
					if (nums[i] === nums[j]) return true;
			}
	}
	
	return false;
};