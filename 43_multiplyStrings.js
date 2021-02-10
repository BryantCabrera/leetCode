// Multiply Strings

// https://leetcode.com/problems/multiply-strings/

// 43. Multiply Strings
// Medium

// 2254

// 948

// Add to List

// Share
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.




// First Attempt
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	// Determine which string is shorter.
	const lengthDiff = num1.length - num2.length;
	
	// Prepend 0s to the shorter string.
	if (lengthDiff > 0) {
			// If the lengthDiff is positive, num2 str is shorter.
			for (let i = 1; i <= lengthDiff; i++) {
					num2 = '0' + num2;
			}
	} else if (lengthDiff < 0) {
			// If the lengthDiff is negative, num1 str is shorter.
			// The foor loop limit has to be the absolute vaue of the negative lengthDiff
			for (let i = 1; i <= Math.abs(lengthDiff); i++) {
					num1 = '0' + num1;
			}
	}
	
	// Initialize solution to 0 so we can keep a running sum, explained below.
	let solution = 0;
	
	// As we would multiply in the real world, start with the rightmost digit of the number in the second row, and move left.
	for (let i = num2.length - 1; i >= 0; i--) {
			// Initialize currentProduct to 0 so we can keep a running sum, explained below.
			let currentProduct = 0;
			let carry = 0;
			
			// As we would multiply in the real world, start with the rightmost digit of the number in the first row, multiply it by the number from the second row captured above, and move left.
			for (let j = num1.length - 1; j >= 0; j--) {
					// Determine the produce of the 2 current digits.
					const product = (parseInt(num2[i]) * parseInt(num1[j])) + carry;
					
					// Determine the ones digit of the product.
					const onesDigit = product % 10;
					
					// Cache the ones digit of the product by keeping a running sum of the ones digits, accounting for the place shift.
					// As we move leftward along the 1st number, each left movement adds a tens place to the ones digit of the product we just calculated.
					currentProduct += onesDigit * (10 ** (num1.length - 1 - j));
					// Determine the carry.
					carry = Math.floor(product / 10);
			}
			
			// If there is a carry, we must prepend it to our current running sum to create the product of this digit of num2 with num1.
			// To prepend the carry, add it to the running sum we are calculating by making sure it is in the correct place (multiple of 10).
			if (carry) {
					currentProduct += carry * (10 ** (num1.length));
			}
			
			// Cache the currentProduct of this digit in num2 with the entirety of num1 by determining its correct place (multiple of 10) and keep a running sum as we move leftwards through the digits of num2.
			// This time, the correct place is determined by the place of the digit in num2 being processed.
			solution += currentProduct * (10 ** (num2.length - 1 - i));
	}
	
	// Stringify the solution.
	return solution.toString();
};