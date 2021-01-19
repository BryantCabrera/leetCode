// Longest Common Prefix

// https://leetcode.com/problems/longest-common-prefix/

// 14. Longest Common Prefix
// Easy

// 3560

// 2085

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	// Edge Case: If there are no elements in the strs array, there is nnon common prefix.
	if (strs.length === 0) return '';
	
	let solution = '';
	
	for (let i = 0; i < strs[0].length; i++) {
			// We start the loop at 1 because we are using word 0 as the reference for every other word.
			for (let j = 1; j < strs.length; j++) {
					if (strs[j][i] !== strs[0][i]) {
							return solution;
					}
			}
			
			solution += strs[0][i];
	}
	
	return solution;
};