// Permutations

// https://leetcode.com/problems/permutations/

// 46. Permutations
// Medium

// 4895

// 118

// Add to List

// Share
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const permutations = [];
	
	// Recursion Termintation Conditions.
	if (nums.length === 0) {
			return [[]];
	} else if (nums.length === 1) {
			return [[nums[0]]];
	}
	
	for (let i = 0; i < nums.length; i++) {
			// Create a new array without the current element.
			const numsTruncated = nums.filter( (el, index) => index !== i);
			
			// Recursively permute the rest of the values.
			const permutatedValues = permute(numsTruncated);
						
			for (let j = 0; j < permutatedValues.length; j++) {
					permutations.push([nums[i], ...permutatedValues[j]]);
			}
	}
	
	return permutations;
};

// First Attempt
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var permute = function(nums) {
// 	const permutations = [nums];
	
// 	// Edge Case
// 	if (nums.length === 0 || nums.length === 1) return permutations;
	
// 	for (let i = 0; i < nums.length; i++) {
// 			// Create a new array without the current element.
// 			const numsTruncated = nums.filter( (el, index) => index !== i);
// 			console.log(numsTruncated);
// 			// const numsDeepCopy = JSON.parse(JSON.stringify(nums));
// 			// const currentNum = numsDeepCopy.splice(0, 1);
			
// 			for (let j = i + 1; j < nums.length; j++) {
// 					// Create a deep copy of numsTruncated for manipulation.
// 					const permutation = JSON.parse(JSON.stringify(numsTruncated));
					
// 					// if (j === i) continue;
					
// 					permutation.splice(j, 0, nums[i]);
// 					console.log(permutation, '@@@@@permutation@@@@@');
					
// 					permutations.push(permutation);
// 			}
// 	}
	
// 	return permutations;
// };