// Two Sum II - Input Array Is Sorted

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// 167. Two Sum II - Input array is sorted
// Easy

// 2265

// 679

// Add to List

// Share
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 3 * 104
// -1000 <= nums[i] <= 1000
// nums is sorted in increasing order.
// -1000 <= target <= 1000


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	const solution = [];
	
	let leftPointer = 0;
	let rightPointer = numbers.length - 1;
	
	while (leftPointer < rightPointer) {
			// Cache the elements/numbers in variables because we use them multiple times below.
			const currentLeft = numbers[leftPointer];
			const currentRight = numbers[rightPointer];
			
			if (currentLeft + currentRight === target) {
					solution.push(leftPointer + 1);
					solution.push(rightPointer + 1);
					break;
			} else if (currentLeft + currentRight < target) {
					// We are using the fact that the numbers array is sorted to our advantage.
					// If the sum of the 2 elements is less than the target, we can hold the right constant and increase the left because we need more than the current left to reach the target.
					leftPointer++;
			} else {
					// We are using the fact that the numbers array is sorted to our advantage.
					// If the sum of the 2 elements is greater than the target, we can hold the left constant and decrease the right because we overshot the target.
					rightPointer--;
			} 
	}
	
	return solution;
};