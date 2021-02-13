// Odd Even Linked List

// https://leetcode.com/problems/odd-even-linked-list/

// 328. Odd Even Linked List
// Medium

// 2796

// 330

// Add to List

// Share
// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
 

// Constraints:

// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...
// The length of the linked list is between [0, 10^4].


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
	// Edge Case: If the LinkedList is null, return null.
	if (head === null) return head;
	
	let odd = head;
	let even = head.next;
	// Cache the even LinkedList's head so we can append it to the tail of the odd LinkedList later on.
	let evenHead = even;
	
	// Traverse the LinkedList and process the nodes.
	while (odd.next !== null && even.next !== null) {
			// Build the odd LinkedList by setting next to the next odd node, which is the node right after the even node that follows this node.
			odd.next = even.next;
			
			// Traverse to the next node of the odd LinkedList.
			odd = odd.next;
			
			// Build the even LinkedList by setting next to the next even node, which is the node right after the current odd node.
			even.next = odd.next;
			
			// Traverse to the next node of the even LinkedList.
			even = even.next;
	}
	
	// Append the even LinkedList to the tail of the odd LinkedList.
	odd.next = evenHead;
	
	return head;
};