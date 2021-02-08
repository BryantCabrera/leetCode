// Add Two Numbers

// https://leetcode.com/problems/add-two-numbers-ii/

// 445. Add Two Numbers II
// Medium

// 2124

// 195

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7


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
	const stack1 = [];
	const stack2 = [];
	
	let current1 = l1;
	let current2 = l2;
	
	// Traverse each LinkedList and add the values to their respective stacks.
	while (current1) {
			stack1.push(current1.val);
			current1 = current1.next;
	}
	
	while (current2) {
			stack2.push(current2.val);
			current2 = current2.next;
	}   
	
	// Determine which LinkedList is shorter.
	const lengthDiff = stack1.length - stack2.length;
	
	// If the LinkedLists are not the same length,
	if (lengthDiff) {
			for (let i = 1; i <= Math.abs(lengthDiff); i++) {
					// Prepend 0s to the shorter LinkedList to make addition easier.
					if (lengthDiff < 0) {
							stack1.unshift(0);
					} else {
							stack2.unshift(0);
					}
			}
	}
	
	const solutionStack = [];
	
	let carry = 0;
	
	// Perform the addition the way we would calculate it in real life.
	for (let i = stack1.length - 1; i >= 0; i--) {
			// Calculate the sum.
			const sum = stack1[i] + stack2[i] + carry;
			
			// Cache the ones digit of the sum in the solutionStack.
			solutionStack.push(sum % 10);
			
			// Calculate the carry.
			carry = Math.floor(sum / 10);
	}
	
	// Prepend a non-zero carry to the solution, in our case, push it onto the stack.
	if (carry) {
			solutionStack.push(carry);
	}
	
	const solution = new ListNode(solutionStack.pop());
	let currentSolutionNode = solution;
	
	// Build the solution LinkedList by using the solutionStack.
	while(solutionStack.length) {
			currentSolutionNode.next = new ListNode(solutionStack.pop());
			
			currentSolutionNode = currentSolutionNode.next;
	}
	
	return solution;
};