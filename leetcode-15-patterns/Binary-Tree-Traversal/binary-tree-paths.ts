/*

Binary Tree Paths


Talk-through: Preorder DFS — visit the node before its children. Build the
path string as we descend; at a leaf, the path is complete so record it.
Backtracking isn't needed here since we pass a new string down each call
instead of mutating a shared array.

Time big O of n^2 in the worst case (string concatenation per leaf), space
big O of n for the recursion stack.
*/
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];

  function dfs(node: TreeNode | null, path: string): void {
    if (node === null) return;

    const currentPath = path === "" ? `${node.val}` : `${path}->${node.val}`;

    if (node.left === null && node.right === null) {
      paths.push(currentPath);
      return;
    }

    dfs(node.left, currentPath);
    dfs(node.right, currentPath);
  }

  dfs(root, "");
  return paths;
}
