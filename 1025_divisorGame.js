// Divisor Game

// https://leetcode.com/problems/divisor-game/

// 1025. Divisor Game
// Easy

// 682

// 1885

// Add to List

// Share
// Alice and Bob take turns playing a game, with Alice starting first.

// Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

// Choosing any x with 0 < x < N and N % x == 0.
// Replacing the number N on the chalkboard with N - x.
// Also, if a player cannot make a move, they lose the game.

// Return True if and only if Alice wins the game, assuming both players play optimally.

 

// Example 1:

// Input: 2
// Output: true
// Explanation: Alice chooses 1, and Bob has no more moves.
// Example 2:

// Input: 3
// Output: false
// Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
 

// Note:

// 1 <= N <= 1000


/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
	// EDGE CASES: 
	// If N is 0, Alice has no numbers to divide N by.
	// If N is 1, Alice cannot divide it by 0.
	if (N === 0 || N === 1) return false;
	
	let currentTurn = 1;
	
	// Given the edge cases above, we cotinue the game until N is less than or equal to 1.
	while (N > 1) {
			// Loop through the digits from 1 to N,
			for (let i = 1; i < N; i++) {
					// If N is evenly divisible by i,
					if (N % i === 0) {
							// Change the turn.
							currentTurn *= -1;
							
							// And update N.
							N -= i;
							
							// Let the next player take his/her turn.
							break;
					}
			}
	}
	
	// If it is currently Bob's turn, Alice has won.
	// If it is currently Alice's turn, Alice has lost.
	return currentTurn === -1;
};