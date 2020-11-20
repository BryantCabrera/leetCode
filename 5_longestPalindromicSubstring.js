// Longest Palindromic Substring

// https://leetcode.com/problems/longest-palindromic-substring/

// 5. Longest Palindromic Substring
// Medium

// 8684

// 603

// Add to List

// Share
// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),



// First Attempt: Time Limit Exceeded
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	const isPalindrome = (str) => {
			const reversedStr = str.toLowerCase().split('').reverse().join('');
			
			return str.toLowerCase() === reversedStr;
	};
	
	let tempStr = '';
	let currentLongestPalindromicSubstring = '';
	
	for (let i = 0; i < s.length; i++) {
			for (let j = i; j < s.length; j++) {
					tempStr += s[j];
					
					if (isPalindrome(tempStr)) {
							currentLongestPalindromicSubstring = tempStr.length > currentLongestPalindromicSubstring.length ? tempStr : currentLongestPalindromicSubstring;
					}
			}
			
			tempStr = '';
	}
			
	return currentLongestPalindromicSubstring;
};