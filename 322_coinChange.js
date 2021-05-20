// Coin Change

// https://leetcode.com/problems/coin-change/

// 322. Coin Change
// Medium

// 6109

// 184

// Add to List

// Share
// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104


// Second Attempt
// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
//  var coinChange = function(coins, amount) {
// 	// Sort the coins so that we can easily traverse from the largest to the smallest, optimizing the least # of coins.
// 	coins.sort(function (a, b) {
// 		 return a - b;
//  });
// 	console.log(coins, amount, '@@@@@coins, amount@@@@@');
	
// 	// Initialize number of coins to 0 so that we can add to eat easier.
// 	let solution = 0;
	
// 	// Loop bakcwards through the array from largest denomination to smallest.
// 	for (let i = coins.length - 1; i >= 0; i--) {
// 			// Cache how many times the current denomination can go into the amount.
// 			const numCoins = Math.floor(amount / coins[i]);
			
// 			// If the denomination is not larger than the current amount,
// 			if (numCoins > 0) {
// 					// Add that number to total number of coins.
// 					solution += numCoins;
					
// 					// The new amount is the remainder of the amount divided by the denomination.
// 					amount = amount % coins[i];
// 			}
			
// 			console.log(solution, amount, '@@@@@solution, amount@@@@@');
// 	}
	
// 	// If there is any remainder, this is not a valid set of denominations.
// 	if (amount) {
// 			solution = -1;
// 	}
	
// 	return solution;
// };





// First Attempt
// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
// 	// Sort the coins so that we can easily traverse from the largest to the smallest, optimizing the least # of coins.
// 	coins.sort(function (a, b) {
// 		 return a - b;
//  });
// 	console.log(coins, amount, '@@@@@coins, amount@@@@@');
	
// 	// Initialize number of coins to 0 so that we can add to eat easier.
// 	let solution = 0;
	
// 	// Loop bakcwards through the array from largest denomination to smallest.
// 	for (let i = coins.length - 1; i >= 0; i--) {
// 			// Cache how many times the current denomination can go into the amount.
// 			const numCoins = Math.floor(amount / coins[i]);
			
// 			// If the denomination is not larger than the current amount,
// 			if (numCoins > 0) {
// 					// Add that number to total number of coins.
// 					solution += numCoins;
					
// 					// The new amount is the remainder of the amount divided by the denomination.
// 					amount = amount % coins[i];
// 			}
			
// 			console.log(solution, amount, '@@@@@solution, amount@@@@@');
// 	}
	
// 	// If there is any remainder, this is not a valid set of denominations.
// 	if (amount) {
// 			solution = -1;
// 	}
	
// 	return solution;
// };