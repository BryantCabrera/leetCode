// Reverse Linked List

// https://leetcode.com/problems/reverse-linked-list/

// 206. Reverse Linked List
// Easy

// 5603

// 106

// Add to List

// Share
// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	// Edge Case
	// If the head is null, just return the head.
	if (head === null) return head;
	
	const nodeValues = []
	let currentNode = head;
	while (currentNode !== null) {
			nodeValues.push(currentNode.val);
			
			// Traverse the LinkedList.
			currentNode = currentNode.next;
	}
	
	const solution = new ListNode();
	let currentNode2 = solution;
	for (let i = nodeValues.length - 1; i >= 0; i--) {
			currentNode2.val = nodeValues[i];
			// If we are at the last index, set the tail equal to null, else set it to a new ListNode.
			currentNode2.next = i!== 0 ? new ListNode() : null;
			
			currentNode2 = currentNode2.next;
	}

	return solution;
};