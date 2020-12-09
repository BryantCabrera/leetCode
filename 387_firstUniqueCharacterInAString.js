// First Unique Character In A String

// https://leetcode.com/problems/first-unique-character-in-a-string/

// 387. First Unique Character in a String
// Easy

// 2426

// 126

// Add to List

// Share
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const charMap = {};
	
	for (const char of s) {
			charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
	}
	
	
	for (let i = 0; i < s.length; i++) {
			if (charMap[s[i]] === 1) {
					return i;
			}
	}
					
	return -1;
};