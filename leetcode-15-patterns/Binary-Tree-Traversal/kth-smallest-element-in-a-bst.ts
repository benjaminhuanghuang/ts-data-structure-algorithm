/*

Kth Smallest Element in a BST


Talk-through: Inorder traversal of a BST visits nodes in ascending order.
Walk it iteratively with an explicit stack, popping nodes in order and
counting down k — the kth pop is the answer. Iterative avoids visiting the
whole tree when the answer is found early.

Time big O of h + k where h is tree height, space big O of h.
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

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    k--;
    if (k === 0) return curr.val;

    curr = curr.right;
  }

  return -1;
}
