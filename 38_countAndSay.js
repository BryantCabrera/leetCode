// Count and Say

// https://leetcode.com/problems/count-and-say/

// 38. Count and Say
// Easy

// 169

// 502

// Add to List

// Share
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":


// Given a positive integer n, return the nth term of the count-and-say sequence.

 

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 

// Constraints:

// 1 <= n <= 30

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	// Base Case.
	if (n === 1) return "1";
	
	const constructCountAndSay = (str) => {
			// I am using an array for the data structure because strings are immutable in JavaScript, so we wouldn't be able to change a particular character (namely, the counter prefix for a particular number in the string) in the string.
			let temp = [];
			
			let counter = 0;
			for (let i = 0; i < str.length; i++) {
					if (str[i] === temp[temp.length - 1]) {
							counter++;
							temp[temp.length - 2] = `${counter}`;
					} else {
							counter = 1;
							temp.push(`${counter}`);
							temp.push(`${str[i]}`);
					}
			}
			
			return temp.join('');
	};
	
	// With the base case accounted for, we can start our loop at i = 2;
	let solution = "1";
	
	for (let i = 2; i <= n; i++) {
			solution = constructCountAndSay(solution);
	}
	
	return solution;
};