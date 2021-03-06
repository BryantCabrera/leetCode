// Subsets

// https://leetcode.com/problems/subsets/

// 78. Subsets
// Medium

// 5026

// 104

// Add to List

// Share
// Given an integer array nums, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	const solution = [[]];
	
	// To create a new subset, we can loop through the integers in the nums array and create a copy of each subset array currently in solution that includes the current integer.
	for (let i = 0; i < nums.length; i++) {
			// Snapshot of current length of solution.
			let counter = solution.length;
			
			for (let j = 0; j < counter; j++)  {
					const subset = [...solution[j], nums[i]];
					
					solution.push(subset);
			}
	}
	
	return solution;
};