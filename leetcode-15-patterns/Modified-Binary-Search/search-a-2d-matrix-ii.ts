/*

Search a 2D Matrix II


Talk-through: Start at the top-right corner. Every value to its left is
smaller, every value below it is larger — that corner is a pivot. If the
current value is too big, move left (shrink column); if too small, move
down (shrink row). Each step eliminates a full row or column.

Time big O of m + n, space big O of 1.
*/
function searchMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const value = matrix[row][col];
    if (value === target) return true;
    if (value > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}
