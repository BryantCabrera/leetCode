// Palidnrome Number

// https://leetcode.com/problems/palindrome-number/

// 9. Palindrome Number
// Easy

// 2958

// 1686

// Add to List

// Share
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	// If x has a negative sign in front of it (is less than 0), it will not be a palindrome.
	if (x < 0) return false; 
	
	// Initialize the reverse of x to 0 to make our calculation easier.
	let reversed = 0;
	
	// Because we evenntually want to check if our reversed integer is the same as x, we have to manipulate a copy of x.
	let xCopy = x;
	
	while (xCopy > 0) {
			// To build the reverse integer:
			// We multiply the current integer in reversed by 10 so that we can add the subsequent integer to the ones place.
			reversed = (reversed * 10) + (xCopy % 10);
			
			// We then divide xCopy so that we have access to the next digit.
			xCopy = Math.floor(xCopy / 10);
	}
	
	// If the reversed number is the same as x, it was a palindrom.
	return reversed === x;
};