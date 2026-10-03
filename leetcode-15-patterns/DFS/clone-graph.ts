/*

Clone Graph


Talk-through: DFS with a visited map from original node to its clone. On
entering a node, create its clone immediately and store it in the map before
recursing into neighbors — that handles cycles, since a neighbor pointing
back finds the in-progress clone already in the map instead of recursing
forever.

Time big O of v + e, space big O of v.
*/
class Node {
  val: number;
  neighbors: Node[];
  constructor(val: number, neighbors: Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;

  const visited = new Map<Node, Node>();

  function dfs(curr: Node): Node {
    if (visited.has(curr)) return visited.get(curr)!;

    const clone = new Node(curr.val);
    visited.set(curr, clone);

    for (const neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}
