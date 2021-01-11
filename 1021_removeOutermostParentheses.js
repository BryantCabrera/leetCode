// Remove Outermost Parentheses

// https://leetcode.com/problems/remove-outermost-parentheses/

// 1021. Remove Outermost Parentheses
// Easy

// 680

// 760

// Add to List

// Share
// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 

// Note:

// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string


/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
	let solution = '';
	
	// A counter for how many open parentheses there are, which will decrement everytime we encounter a closing parentheses.
	const parenthesesMap = {
			'(': 0,
	};
	
	// A counter that keeps track of the starting index in S from which we will capture the substring and concatenate to our solution.
	let substringStartIndex = 0;

	for (let i = 0; i < S.length; i++) {
			if (S[i] === '(') {
					parenthesesMap['('] += 1;
			} else if (S[i] === ')') {
					parenthesesMap['('] -= 1;
					
					// We know we have reached the corresponding closing parenthesis for an open parenthesis when the counts of each equal each other.
					if (parenthesesMap['('] === 0) {
							solution += S.substring(substringStartIndex + 1, i);
							substringStartIndex = i + 1;
					} else if (parenthesesMap['('] < 0) {
							// An invalid parentheses string.
							return S;
					}
			}
	}
	
	return solution;
};