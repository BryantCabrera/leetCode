// Valid Anagram

// https://leetcode.com/problems/valid-anagram/

// 242. Valid Anagram
// Easy

// 1973

// 155

// Add to List

// Share
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	// If the strings are not the same length, return false.
	if (s.length !== t.length) return false;
	
	// If the strings are the same length, check the letters from string against the letters in string s, which we have stored in a hashMap.
	let result = true;
	
	const charMap = {};
	
	for (const char of s) {
			charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
	}
	
	for (const char of t) {
			if (!charMap[char] || charMap[char] < 1) {
					result = false;
					break;
			} else {
					charMap[char] = charMap[char] - 1;
			}    
	}
	
	return result;
};