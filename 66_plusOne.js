// Plus One

// https://leetcode.com/problems/plus-one/

// 66. Plus One
// Easy

// 1971

// 2832

// Add to List

// Share
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]
 

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	const solution = [];
	
	let carry = 0;
	for (let i = digits.length - 1; i >= 0; i--) {
			// Increment the current digit or add the carry.
			let increment = i === digits.length - 1 ? digits[i] + 1 : digits[i] + carry;
			
			// Reset carry.
			carry = 0;
			
			let newDigit;
			
			// Account for new carries.
			if (increment >= 10) {
					carry += 1;
					newDigit = increment - 10;
			} else {
					newDigit = increment;
			}
			
			// Assign new digit.
			solution[i] = newDigit;

			if (i === 0 && carry !== 0) {
					solution.unshift(carry);
			}
	}
	
	return solution;
};


// First Attempt
// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
// 	const number = parseInt(digits.join(''), 10);
	
// 	const incrementedNumber = `${number + 1}`;
// 	const solution = incrementedNumber.split('');
// 	solution.forEach((digit, index) => incrementedNumber[index] = parseInt(digit, 10));
	
// 	return solution;
// };