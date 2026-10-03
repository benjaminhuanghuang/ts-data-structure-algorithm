/*

Number of Islands


Talk-through: Scan every cell; whenever an unvisited "1" is found, that's a
new island, so count it and DFS outward sinking every connected "1" to "0"
so it's never counted again.

Time big O of rows * cols, space big O of rows * cols.
*/
function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (grid[r][c] !== "1") return;

    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
