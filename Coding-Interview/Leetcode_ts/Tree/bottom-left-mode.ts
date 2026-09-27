/*
  给一棵二叉树，求出该二叉树最底层最左边的节点。

  [Google]
*/

import { TreeNode } from "../Common/TreeNode";
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
