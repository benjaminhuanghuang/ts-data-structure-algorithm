/*

Binary Tree Maximum Path Sum


Talk-through: Postorder DFS — each node needs its children's best downward
path before it can decide its own. For each node, compute the max single-
branch gain it can contribute upward to a parent (its own value plus the
better of its children's gains, floored at 0 since negative branches should
just be dropped). Separately, update a global max using both children's
gains at once, since a path can bend through a node using both branches —
but that bent form can't be passed up to the parent.

Time big O of n, space big O of h for the recursion stack.
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

function maxPathSum(root: TreeNode | null): number {
  let best = -Infinity;

  function gain(node: TreeNode | null): number {
    if (node === null) return 0;

    const leftGain = Math.max(gain(node.left), 0);
    const rightGain = Math.max(gain(node.right), 0);

    best = Math.max(best, node.val + leftGain + rightGain);

    return node.val + Math.max(leftGain, rightGain);
  }

  gain(root);
  return best;
}
