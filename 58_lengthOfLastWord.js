// Length of Last Word

// https://leetcode.com/problems/length-of-last-word/

// 58. Length of Last Word
// Easy

// 926

// 2937

// Add to List

// Share
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.


// RegEx Solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	// Edge Case: If there are no words in the string, return 0.
	const wordRegEx = new RegExp(/\w/, 'g');
	if (!wordRegEx.test(s)) return 0;
	
	// Edge Case: If there is only 1 word, return the length of that word.
	const spaceRegEx = new RegExp(/\s/, 'g');
	if (!spaceRegEx.test(s)) return s.length;
	
	// Edge Case: If the string ends with a space.
	if (s[s.length - 1] === ' ') {
			const trailingSpaceRegEx = new RegExp(/((\w+)(\s+))+/, 'g');
			const matchWordBeforeSpace = trailingSpaceRegEx.exec(s);
			
			return matchWordBeforeSpace[2].length;
	}
	
	// RegEx that matches a space before a word.
	const regEx = new RegExp(/((\s+)(\w+))+/, 'g');
	const match = regEx.exec(s);
	
	// Return the last capture group's length.
	return match[match.length - 1].length;
};