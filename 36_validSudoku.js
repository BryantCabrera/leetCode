// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/

// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// A partially filled sudoku which is valid.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being 
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	const isValid = (dataSetArr) => {
			const hashMap = {};
			
			for (let i = 0; i < dataSetArr.length; i++) {
					if (dataSetArr[i] !== '.' && hashMap[dataSetArr[i]]) return false;
					
					hashMap[dataSetArr[i]] = 1;
			}
			
			return true;
	};
	
	// Check rows.
	for (let j = 0; j < board.length; j++) {
			if (!isValid(board[j])) return false;    
	}
	
	// Check columns.
	for (let k = 0; k < board[0].length; k++) {
			const column = board.reduce( (acc, row) => {
					acc.push(row[k]);
					return acc;
			}, []);
			
			console.log(`column ${k}: ${column}`);
			
			if (!isValid(column)) return false;
	}
	
	// Check squares.
	const squares = [];
	const rowMin = 0;
	const colMin = 0;
	
	while (squares.length < board.length) {
			const square = [];
			for (let rowIndex = rowMin; rowIndex < rowMin + 3; rowIndex++) {
					for (let colIndex = colMin; colIndex < colMin + 3; colIndex++) {
							square.push(board[rowIndex][colIndex]);
					}       
			}
			
			squares.push(square);
	}
	
	// for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
	//     for (let colIndex = 0; colIndex < 3; colIndex++) {
	//         squares.push(board[rowIndex][colIndex]);
	//     }       
	// }

	console.log(`squares: ${squares}`);
	
	if (!isValid(squares)) return false;
	
	return true;
};