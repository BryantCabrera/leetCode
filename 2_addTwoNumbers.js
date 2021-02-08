// Add Two Numbers

// https://leetcode.com/problems/add-two-numbers/

// 2. Add Two Numbers
// Medium

// 10739

// 2608

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	// Edge Cases: If one LinkedList is null, return the other LinkedList.
	if (l1 === null) return l2;
	if (l2 === null) return l1;
	
	let solution = new ListNode();
	let currentSolution = solution;
	
	let current1 = l1;
	let current2 = l2;
	
	let carry = 0;
	
	// While either LinkedList still has nodes to process,
	while (current1 !== 0 || current2 !== 0) {
			// Cache the digit values.
			const digit1 = current1 ? current1.val : current1;
			const digit2 = current2 ? current2.val : current2;
			
			// Calculate the sum.
			const sum = digit1 + digit2 + carry;
			
			// Cache the ones digit of the sum in the solution.
			currentSolution.val = sum % 10;

			// Adjust the carry.
			carry = Math.floor(sum / 10);
			
			// Traverse the LinkedLists.
			// If a LinkedList has no more nodes to process, set the currentNode in that traversal to 0 to make addition easier later.
			current1 = current1 === 0 || current1.next === null ? 0 : current1.next;
			current2 = current2 === 0 || current2.next === null ? 0 : current2.next;
			
			// If either LinkedList still has nodes to process, scaffold the next of the current node in the traversal of the solution LinkedList we are building.
			if (current1 || current2) {
					currentSolution.next = new ListNode();
					currentSolution = currentSolution.next;
			}
	}
	
	// If there is a non-zero carry, append it to the LinkedList
	if (carry) {
			currentSolution.next = new ListNode(carry);
	}
	
	return solution;
};


// First Attempt
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
// 	// Edge Cases: If one LinkedList is null, return the other LinkedList
// 	if (l1 === null) return l2;
// 	if (l2 === null) return l1;
	
// 	let solution = new ListNode((l1.val + l2.val) % 10);
// 	let currentSolution = solution;
	
// 	let current1 = l1.next ? l1.next : 0;
// 	let current2 = l2.next ? l2.next : 0;
	
// 	let carry = Math.floor((l1.val + l2.val) / 10);
	
// 	while (current1 !== 0 || current2 !== 0) {
// 			const digit1 = current1.val ? current1.val : 0;
// 			const digit2 = current2.val ? current2.val : 0;
			
// 			const sum = digit1 + digit2 + carry;
			
// 			currentSolution.next = new ListNode(sum % 10);
// 			console.log(solution, '@@@@@solution@@@@@');
// 			carry = Math.floor(sum / 10);
			
// 			current1 = current1 !== 0 && current1.next === null ? 0 : current1.next;
// 			current2 = current2 !== 0 && current2.next === null ? 0 : current2.next;
			
// 			currentSolution = currentSolution.next;
// 	}
	
// 	return solution;
// };