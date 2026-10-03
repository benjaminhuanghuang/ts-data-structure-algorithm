/*

Flood Fill


Talk-through: DFS (or BFS) from the start pixel, repainting any connected
pixel that matches the original color. Guard against the no-op case where
the new color equals the original — without it, a grid with the same color
everywhere recurses forever since the "already painted" check never
triggers.

Time big O of rows * cols, space big O of rows * cols.
*/
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const original = image[sr][sc];
  if (original === color) return image;

  const rows = image.length;
  const cols = image[0].length;

  function dfs(r: number, c: number): void {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (image[r][c] !== original) return;

    image[r][c] = color;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return image;
}
