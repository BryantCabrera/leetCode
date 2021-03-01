// Distribute Candies to People

// https://leetcode.com/problems/distribute-candies-to-people/

// 1103. Distribute Candies to People
// Easy

// 492

// 145

// Add to List

// Share
// We distribute some number of candies, to a row of n = num_people people in the following way:

// We then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person.

// Then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.

// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.  The last person will receive all of our remaining candies (not necessarily one more than the previous gift).

// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

 

// Example 1:

// Input: candies = 7, num_people = 4
// Output: [1,2,3,1]
// Explanation:
// On the first turn, ans[0] += 1, and the array is [1,0,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3,0].
// On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].
// Example 2:

// Input: candies = 10, num_people = 3
// Output: [5,2,3]
// Explanation: 
// On the first turn, ans[0] += 1, and the array is [1,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3].
// On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
 

// Constraints:

// 1 <= candies <= 10^9
// 1 <= num_people <= 1000


/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
	const solution = new Array(num_people).fill(0);
	
	let currentPerson = 1;
	let additionalCandy = 0;
	
	// While we still have candies to distribute,
	while (candies > 0) {
			// Determine the amounnt of candy to give to the current person.
			let candyToGive = currentPerson + additionalCandy;
			
			// If there is not enough candy to give to the current person given the amount we are supposed to give them, give them the amount of candies we have left.
			let candyGiven = candyToGive > candies ? candies : candyToGive;
			
			// Update the amount of candy distributed to the current person.
			solution[currentPerson - 1] += candyGiven;
			
			// Update the remaining candy left to. distribute.
			candies -= candyGiven;
			
			// Move onto the next person.
			// If we are currently at the last person, start ocer at the first person.
			currentPerson = currentPerson === num_people ? 1 : currentPerson + 1;
			
			// When we are at the end of the row, update the additional candy we are distributing by adding the number of people to it.
			if (currentPerson === 1) {
					additionalCandy += num_people;
			}    
	}
	
	return solution;
};