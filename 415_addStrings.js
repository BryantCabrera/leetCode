// Add Strings

// https://leetcode.com/problems/add-strings/

// 415. Add Strings
// Easy

// 1511

// 360

// Add to List

// Share
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
	// Determine which string is longer.
	const lengthDiff = num1.length - num2.length;
	const shorterStr = lengthDiff < 0 ? num1 : num2;
	
	// If the strings are not the same length,
	if (lengthDiff !== 0) {
			// Prepend the shorter string with leading 0s.
			for (let i = 0; i < Math.abs(lengthDiff); i++) {
					if (lengthDiff < 0) {
							num1 = '0' + num1;
					} else {
							num2 = '0' + num2;
					}
			}
	}
	
	let solution = '';
	let carry = 0;
	
	// Loop backwards through the strings to add as we normally would.
	for (let i = num1.length - 1; i >= 0; i--) {
			// Get the sum of the digits in the current place (index).
			const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
			
			// The digit we are caching into our solution is the remainder of the sum divided by 10.
			const onesDigit = sum % 10;
			solution = `${onesDigit}` + solution;
			
			// The carry is determined by the sum being over or under 10.
			carry = Math.floor(sum / 10);
	}
	
	// Edge Case: If the carry is not 0, prepend it to the solution.
	return carry === 0 ? solution : `${carry}${solution}`;
};


// First Attempt
// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var addStrings = function(num1, num2) {
// 	// Edge Case: If either string has no length, we cannot add them.
// 	if (num1.length <= 0 || num2.length <= 0) return null;
	
// 	let solution = 0;
// 	let carry = 0;
	
// 	let longerNum = num2.length > num1.length ? num2 : num1;
// 	let otherNum = longerNum === num1 ? num2 : num1;
	
// 	for (let i = longerNum.length; i >= 0; i--) {
// 			const firstDigit = longerNum[i] !== undefined ? parseInt(longerNum[i]) : 0;
// 			const secondDigit = otherNum[i] !== undefined ? parseInt(otherNum[i]) : 0;
			
// 			let sumOfCurrentDigits =  (firstDigit + secondDigit + carry);
// 			solution += ((10 ** i) + sumOfCurrentDigits) % 10;
// 			carry = Math.floor(sumOfCurrentDigits / 10);
			
// 			console.log(typeof sumOfCurrentDigits);
// 			console.log(longerNum, otherNum, sumOfCurrentDigits, solution, carry, '@@@@@sum, solution, carry@@@@@');
// 	}
	
// 	return solution.toString();
// };