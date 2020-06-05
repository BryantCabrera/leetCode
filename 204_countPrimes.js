// Count Primes
// https://leetcode.com/problems/count-primes/

// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


// Attempt #1
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function(n) {
// 	const isPrime = num => {
// 		for (let i = 2; i < num; i++)
// 			if (num % i === 0) return false;
// 		return num > 1;
// 	}
	
// 	let count = 0;
// 	for (let i = 0; i < n; i++) {
// 			if (isPrime(i)) count++;
// 	}
	
// 	return count;
// };