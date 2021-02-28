// Is Subsequence

// https://leetcode.com/problems/is-subsequence/

// 392. Is Subsequence
// Easy

// 2239

// 229

// Add to List

// Share
// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: If there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	// We will start the search for the 0th indexed character in s among the characters in t.
	let currentSIndex = 0;
	
	// Loop through the characters in t in order.
	for (let i = 0; i < t.length; i++) {
			// If we have already found the entirety of s to be a substring of t, break.
			if (currentSIndex > s.length - 1) break;
			
			// If the current character in s is a character t, we will look for the next character in s.
			if (t[i] === s[currentSIndex]) currentSIndex++;
	}
	
	// If we have incremented past the length of s, that means we have found its entirety in t, and s is thus a substring of t.
	return currentSIndex === s.length;
};