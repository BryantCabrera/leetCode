// Remove Duplicates From Sorted Array II

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

// 80. Remove Duplicates from Sorted Array II
// Medium

// 1668

// 767

// Add to List

// Share
// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3]
// Explanation: Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively. It doesn't matter what you leave beyond the returned length.
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3]
// Explanation: Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively. It doesn't matter what values are set beyond the returned length.
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -104 <= nums[i] <= 104
// nums is sorted in ascending order.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	const valueMap = new Map();
	
	// We decrement so that when we remove an element from the array, we do nont mess with the counter of the foor loop.
	for (let i = nums.length - 1; i >= 0; i--) {
			if (!valueMap.get(nums[i]))  {
					// If the value doesn't exist in the hashMap, add it.
					valueMap.set(nums[i], 1);
			} else if (valueMap.get(nums[i]) === 1) {
					// If the value does exist in the hashMap and has a count of 1, increment it to 2.
					valueMap.set(nums[i], 2);
			} else {
					// If the value does exist in the hashMap and already has a count of 2, remove the element from the array.
					// This means we already have the max count of this number in the array.
					// Remove any other instances of this number.
					nums.splice(i, 1);
			}
	}
	
	return nums.length;
};