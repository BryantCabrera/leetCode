// Keys And Rooms
// https://leetcode.com/problems/keys-and-rooms/submissions/

// 841. Keys and Rooms
// Medium

// 797

// 68

// Add to List

// Share
// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

// Initially, all the rooms start locked (except for room 0). 

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

// Example 1:

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:  
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.
// Example 2:

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.
// Note:

// 1 <= rooms.length <= 1000
// 0 <= rooms[i].length <= 1000
// The number of keys in all rooms combined is at most 3000.


/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
	// Create an array representing the possible list of rooms where each value represents whether or not that room can be indexed
	const accessibleRooms = new Array(rooms.length).fill(false);
	// The first room is always accessible
	accessibleRooms[0] = true;
	
	// Initialize the currentRoom to investigate
	let currentRoom = 0;
	// Create a queue of rooms we can visit (which is dictated by the keys we get from the currentRoom we are visiting)
	let queue = [...rooms[0]];
	
	// While there are still rooms to investigate, perform this function
	while (queue.length > 0) {
			// Update current room
			currentRoom = queue.shift();
			
			// Update the array to show that this room can be accessed
			accessibleRooms[currentRoom] = true;
			
			// Iterate through that room's keys
			// I chose to decrement so that we can remove keys from the queue without affecting the loop
			for (let i = rooms[currentRoom].length - 1; i >= 0 ; i--) {
					// Add the key to the queue, which signifies a room we can investigate
					queue.push(rooms[currentRoom][i]);
					// Remove that key from the currentRoom
					rooms[currentRoom].pop();
			}
	}
	
	// If even one room isn't accessible, return false
	return !accessibleRooms.includes(false);
};


// Attempt #1: Incorrect Logic
//     for (let i = 0; i < rooms.length; i++) {
//         for (let j = 0; j < rooms[i].length; j++) {
//             if (i !== rooms[i][j]) {
//                 keysArr[rooms[i][j]] = true;
//                 console.log('keysArr: ', keysArr);
//             }
//         }
//     }
	
//     return !keysArr.includes(false);