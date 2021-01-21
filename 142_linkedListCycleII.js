// Linked List Cycle II

// https://leetcode.com/problems/linked-list-cycle-ii/

// 142. Linked List Cycle II
// Medium

// 3650

// 277

// Add to List

// Share
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:


// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:


// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.
 

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.
 

// Follow up: Can you solve it using O(1) (i.e. constant) memory?


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
var detectCycle = function(head) {
	// Edge Cases: 
	// If the head is null, it has no nodes, and therefore no possible cycle.
	// If the head only has 1 node, there is no possible cycle.
	if (head === null || head.next === null) return null;
	
	let slowPointer = head;
	let fastPointer = head;
	
	// We traverse the LinkedList until fastPointer gets to a null, which means the LinkedList does not have a cycle.
	while (fastPointer !== null && fastPointer.next !== null) {
			// The slowPointer moves one node at a time.
			// The fastPointer moves twice as fast as the slowPointer.
			slowPointer = slowPointer.next;
			fastPointer = fastPointer.next.next;
			
			// If the fastPointer ever ends up on the same nnode as the slowPointer, we know there is a cycle in the LinkedList.
			if (slowPointer === fastPointer) {
					break;
			}
	}
	
	// Edge Case: If the LinkedList has no cycle, if fastPointer ever reaches a null nonde, there is no cycle.
	if (fastPointer === null || fastPointer.next === null) return null;
	
	// Reset the pointer to head.
	slowPointer = head;
	
	// Now increment each pointer 1 node and the next place they meet is the entrance of the cycle.
	// This is because when fastPointer is moving 2x faster than slowPointer, when slowPointer reaches the entrance of the loop, it is k distance from the head of the linkedList.  Meanwhile, fastPointer will be 2k away from head, but k distance into the loop/k away from the entrance of the cycle.
	// If we move the slowPointer halfway through the cycle, the fastPointer will move 1 revolution and end up back at k away from the etrance of the cycle.
	// If we move the slowPointer through the other half of the cycle, the fastPointer will make 1 again make 1 revolution and end up back at k away from the entrance of the cycle.
	// Now when the slowPointer traversed the latter half of the cycle, the fastPointer passed it at some point, a.k.a. they were at the same node.  To figure out what that node was, think about it like this: slowPointer is at the beginning of the cycle and fastPointer is k away from the beginning of the cycle.  If we move the slowPointer backwards k through the cycle, then fastPointer will move 2k back from its current positionn and end up k before the entrance of the cycle, right where the slowPointer is.
	// Now with the fastPointer k before the entrance of the cycle, we reset the slowPointer to the head.  If we now increment both pointers 1 node until they meey, each will travel a distance k to the entrance of the cycle.
	while (slowPointer !== fastPointer) {
			slowPointer = slowPointer.next;
			fastPointer = fastPointer.next;
	}
	
	return slowPointer;
};