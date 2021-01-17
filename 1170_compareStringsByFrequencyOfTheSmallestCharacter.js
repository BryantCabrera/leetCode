// Compare Strings By Frequency Of The Smallest Character

// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

// 1170. Compare Strings by Frequency of the Smallest Character
// Easy

// 319

// 768

// Add to List

// Share
// Let's define a function f(s) over a non-empty string s, which calculates the frequency of the lexicographically smallest character in s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is "c" and its frequency is 2.

// Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

 

// Example 1:

// Input: queries = ["cbd"], words = ["zaaaz"]
// Output: [1]
// Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
// Example 2:

// Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// Output: [1,2]
// Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
 

// Constraints:

// 1 <= queries.length <= 2000
// 1 <= words.length <= 2000
// 1 <= queries[i].length, words[i].length <= 10
// queries[i][j], words[i][j] are English lowercase letters.


/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
	const findSmallestChar = (str) => {
			const strArr = str.split('').sort();
			return strArr[0];
	};
	
	const findCountOfSmallestChar = (str, char) => {
			let count = 0;
			
			for (let i = 0; i < str.length; i++) {
					if (str[i] === char) count++;
			}
			
			return count;
	};
	
	const solution = new Array(queries.length);
	solution.fill(0);
	
	for (let i = 0; i < queries.length; i++) {
			const smallestChar1 = findSmallestChar(queries[i]);
			
			const countOfSmallestChar1 = findCountOfSmallestChar(queries[i], smallestChar1);
			
			for (let j = 0; j < words.length; j++) {
					const smallestChar2 = findSmallestChar(words[j]);
					
					const countOfSmallestChar2 = findCountOfSmallestChar(words[j], smallestChar2);
					
					if (countOfSmallestChar1 < countOfSmallestChar2) solution[i] += 1;
			}
	}
	
	return solution;
};