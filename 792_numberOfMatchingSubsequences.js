// Number of Matching Subsequences

// https://leetcode.com/problems/number-of-matching-subsequences/

// 792. Number of Matching Subsequences
// Medium

// 1276

// 89

// Add to List

// Share
// Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

// Example :
// Input: 
// S = "abcde"
// words = ["a", "bb", "acd", "ace"]
// Output: 3
// Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
// Note:

// All words in words and S will only consists of lowercase letters.
// The length of S will be in the range of [1, 50000].
// The length of words will be in the range of [1, 5000].
// The length of words[i] will be in the range of [1, 50].


/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
	let solution = 0;
	
	// Loop through all of the words in the words array.
	for (let i = 0; i < words.length; i++) {
			// If that word is a valid subsequence of S, increment the solution counter.
			if (isSubsequence(words[i], S)) solution++;
	}
			 
	return solution;
};

const isSubsequence = function(s, t) {
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