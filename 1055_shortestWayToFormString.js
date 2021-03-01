// Shortest Way to Form String

// https://leetcode.com/problems/shortest-way-to-form-string/

// 1055. Shortest Way to Form String
// Medium

// 591

// 38

// Add to List

// Share
// From any string, we can form a subsequence of that string by deleting some number of characters (possibly no deletions).

// Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. If the task is impossible, return -1.

 

// Example 1:

// Input: source = "abc", target = "abcbc"
// Output: 2
// Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".
// Example 2:

// Input: source = "abc", target = "acdbc"
// Output: -1
// Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.
// Example 3:

// Input: source = "xyz", target = "xzyxz"
// Output: 3
// Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
 

// Constraints:

// Both the source and target strings consist of only lowercase English letters from "a"-"z".
// The lengths of source and target string are between 1 and 1000.





// First Attempt
// /**
//  * @param {string} source
//  * @param {string} target
//  * @return {number}
//  */
// var shortestWay = function(source, target) {
// 	// Create a hashMap of all of the characters in source where their values are their indices.
// 	const sourceMap = new Map();
	
// 	for (let i = 0; i < source.length; i++) {
// 			sourceMap.set(source[i], i);
// 	}
	
// 	console.log(sourceMap, '@@@@@sourceMap@@@@@');
	
// 	let solution = 0;
// 	// Cache the current index of the character from source so we can determine if the next character in t comes before, after, or is the same as the character from source.
// 	let current = 0;
	
// 	// Loop through the target's character.
// 	for (let j = 0; j < target.length; j++) {
// 			// Cache the sourceMap value for the current character in target.
// 			const sourceMapValue = sourceMap.get(target[j]);
// 			console.log(sourceMapValue, current, '@@@@@sourceMapValue, current@@@@@');
			
// 			if (sourceMapValue === undefined) { 
// 					// If the current character in target does not exist in source, it is impossible to form target from subsequences of source.
// 					return -1;
// 			} else if (sourceMapValue > current) {
// 					// If the current character in target is a character in source after the previous character in source, we are in the same subsequence and do not need to increment our counter of subsequences.
// 					// Cache the current index in source to compare the next character in target to.
// 					current = sourceMapValue;
// 			} else if (sourceMapValue <= current) {
// 					// If the current character in target is a character in source before or the same the previous character in source, we are starting a new subsequence and need to increment our counter of subsequences.
// 					solution++;
// 					// Cache the current index in source to compare the next character in target to.
// 					current = sourceMapValue;
// 			}
// 	}
	
// 	return solution;
// };


// /**
//  * @param {string} source
//  * @param {string} target
//  * @return {number}
//  */
// var shortestWay = function(source, target) {
// 	let solution = 0;
	
// 	// Cache the current index of the character from source so we can determine if the next character in t comes before, after, or is the same as the character from source.
// 	let currentS = 0;
	
// 	// Loop through the target's character.
// 	for (let j = 0; j < target.length; j++) {
//         // Cache the boolean for whether or not the current character is the same as the current source character.
//         const tIsCurrentS = target[j] === source[currentS];
//         console.log(tIsCurrentS, currentS, '@@@@@tIsCurrentS, currentS@@@@@');

//         if (currentS > source.length - 1) { 
//                 if (j > currentS) {
//                         // If the current character in target is a character in source after the previous character in source, we are in the same subsequence and do not need to increment our counter of subsequences.
//                         // Cache the current index in source to compare the next character in target to.
//                         currentS = j;
//                 } else if (j <= currentS) {
//                         // If the current character in target is a character in source before or the same the previous character in source, we are starting a new subsequence and need to increment our counter of subsequences.
//                         solution++;
//                         // Cache the current index in source to compare the next character in target to.
//                         currentS = j;
//                 } else {
//                         // If the current character in target does not exist in source, it is impossible to form target from subsequences of source.
//                 return -1;
//                 }    
//         } else if (target[j] !== source[currentS]) {
//                 currentS++;
//         }       
// 	}
	
// 	return solution;
// };


/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
	let solution = 0;
	
	// Cache the current index of the character from source so we can determine if the next character in t comes before, after, or is the same as the character from source.
	let currentS = 0;
	
	// Loop through the target's character.
	for (let j = 0; j < target.length; j++) {
			// Cache the boolean for whether or not the current character is the same as the current source character.
			const tIsCurrentS = target[j] === source[currentS];
			console.log(tIsCurrentS, currentS, '@@@@@tIsCurrentS, currentS@@@@@');
			
			if (currentS > source.length - 1) { 
					if (j > currentS) {
							// If the current character in target is a character in source after the previous character in source, we are in the same subsequence and do not need to increment our counter of subsequences.
							// Cache the current index in source to compare the next character in target to.
							currentS = j;
					} else if (j <= currentS) {
							// If the current character in target is a character in source before or the same the previous character in source, we are starting a new subsequence and need to increment our counter of subsequences.
							solution++;
							// Cache the current index in source to compare the next character in target to.
							currentS = j;
					} else {
							// If the current character in target does not exist in source, it is impossible to form target from subsequences of source.
					return -1;
					}    
			} else if (target[j] !== source[currentS]) {
					currentS++;
			}       
	}
	
	return solution;
};


/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
	let solution = 0;
	
	let currentIndexT = 0;
	
	while (currentIndexT < target.length) {
			for (let i = 0; i < source.length; i++) {
					if (source[i] === target[currentIndexT]) {
							currentIndexT++;
					}
			}
	}
	
	return solution;
};