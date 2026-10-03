/*

Surrounded Regions


Talk-through: Any "O" connected to the border can never be fully surrounded,
so it's safe. DFS from every border cell first, marking safe "O"s with a
temporary marker. Afterward, a single pass flips every remaining "O" (never
reached from the border, so it's truly surrounded) to "X", and restores the
marked cells back to "O".

Time big O of rows * cols, space big O of rows * cols.
*/
function solve(board: string[][]): void {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (board[r][c] !== "O") return;

    board[r][c] = "#";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0);
    dfs(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    dfs(0, c);
    dfs(rows - 1, c);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      else if (board[r][c] === "#") board[r][c] = "O";
    }
  }
}
