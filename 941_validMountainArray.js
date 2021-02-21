// Valid Mountain Array

// https://leetcode.com/problems/valid-mountain-array/

// 41. Valid Mountain Array
// Easy

// 812

// 92

// Add to List

// Share
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
	let peak = arr[0];
	let current = arr[0];
	let increased = false;
	let decreased = false;
	
	for (let i = 1; i < arr.length; i++) {
			// If any integers are repeated consecutively, the array is not strictly increasing or decreasing.
			if (arr[i] === current) return false;
			
			if (arr[i] > current && current === peak) {
					// If current is the same as peak, we are in the increasing part of the array.
					increased = true;
					// If arr[i] is bigger than the currently cached element, it becomes the new peak.
					peak = arr[i];
			} else if (arr[i] < current && current <= peak) {
					// If current is less than or equal to the peak and arr[i] is less than current, we are in the decreasing part of the array.
					decreased = true;
			} else if (arr[i] > current && current < peak) {
					// If we are in the decreasing part of the array and arr[i] is greater than the currently cached element, the array is not strictly increasing or decreasing.
					return false;
			} 
			
			current = arr[i];
	}
	
	// The array had to have both increased and decreased.
	return increased && decreased;
};