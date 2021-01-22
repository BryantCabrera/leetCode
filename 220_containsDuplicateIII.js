// Contains Duplicate III

// https://leetcode.com/problems/contains-duplicate-iii/

// 220. Contains Duplicate III
// Medium

// 1468

// 1563

// Add to List

// Share
// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true
// Example 3:

// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false
 

// Constraints:

// 0 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 104
// 0 <= t <= 231 - 1


/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
	for (let i = 0; i < nums.length; i++) {
			// It is ok to have j start at i + 1 here without bound checks because if i === nums.length, than j would be greater than nums.lenth and the conditional would prevent the loop from starting.
			for (let j = i + 1; j < nums.length; j++) {
					// If the absolute value of the difference between j and i is greater than k,
					// there is no need to check the rest of the elements after nums[j].
					if (Math.abs(i - j) > k) break;
					
					// If the difference between j and i is less than or equal to k
					// AND if the absolute value of the difference between nums[i] and nums[j] is greater than t, 
					// then we have satisfied the conditions for a "nearby almost duplicate".
					if (Math.abs(nums[i] - nums[j]) <= t) return true;
			}
	}
			
	return false;
};