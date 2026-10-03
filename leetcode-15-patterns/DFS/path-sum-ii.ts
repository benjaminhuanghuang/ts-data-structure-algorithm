/*

Path Sum II


Talk-through: DFS while tracking the running path and remaining sum needed.
At a leaf where the remaining sum hits exactly 0, record a copy of the
current path — a copy matters because the same array keeps getting mutated
as the DFS backtracks. Pop the node off the path after exploring both
children (classic backtracking).

Time big O of n^2 worst case (copying paths), space big O of h.
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function dfs(node: TreeNode | null, remaining: number): void {
    if (node === null) return;

    path.push(node.val);
    remaining -= node.val;

    if (node.left === null && node.right === null && remaining === 0) {
      result.push([...path]);
    } else {
      dfs(node.left, remaining);
      dfs(node.right, remaining);
    }

    path.pop();
  }

  dfs(root, targetSum);
  return result;
}
