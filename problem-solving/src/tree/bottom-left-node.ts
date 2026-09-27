/*
  给一棵二叉树，求出该二叉树最底层最左边的节点。

  [Google]
*/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/*
  BFS
*/
function findBottomLeftValue_BFS(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }
  let queue = [root];
  let result = root.val;

  while (queue.length) {
    let nextLayer = [];
    for (let node of queue) {
      if (node.left) {
        nextLayer.push(node.left);
      }
      if (node.right) {
        nextLayer.push(node.right);
      }
    }
    if (nextLayer.length) {
      result = nextLayer[0].val; // keep the leftmost node of the current level
    }
    queue = nextLayer;
  }
  return result;
}

/*
  
  DFS
*/
function findBottomLeftValue_DFS(root: TreeNode | null): number {
  if (!root) {
    return -1;
  }
  let result = root.val;
  let maxDepth = 0;

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }
    if (depth > maxDepth) {
      // means reach a new level
      maxDepth = depth;
      result = node.val; // the leftmost node of the current level
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  dfs(root, 0);
  return result;
}
