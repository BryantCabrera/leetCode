// Palindrome Linked List

// https://leetcode.com/problems/palindrome-linked-list/

// 234. Palindrome Linked List
// Easy

// 4474

// 414

// Add to List

// Share
// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	// Build an array of the values in the Linked List.
	const values = [];
	
	// Traverse the entire linked list to get the values.
	let current = head;
	
	while (current !== null) {
			values.push(current.val);
			current = current.next;
	}

	// Loop through the values with 1 pointer at the start and another pointer at the end.
	// At each point, if the 2 numbers do not equal each other, the list is not a Palindrome.
	let start = 0;
	let end = values.length - 1;
	
	// We can terminate the loop when start >= end because:
	// If start > end, we have already checked those values.
	// If start === end, they are on the same element in the array and will thus be equal.
	while (start < end) {
			if (values[start] !== values[end]) return false;
			
			// Move our start and end pointers.
			start++;
			end--;
	}
	
	return true;
};