/*

Course Schedule II


Talk-through: Topological sort via DFS. Build an adjacency list, then DFS
each node, marking it "visiting" on entry and "visited" on exit. Hitting a
"visiting" node mid-DFS means a cycle — no valid order exists. On exit, push
the node to the result; since children are finished before their parents,
reversing that post-order gives a valid topological order.

Time big O of v + e, space big O of v + e.
*/
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  const UNVISITED = 0;
  const VISITING = 1;
  const VISITED = 2;
  const state = new Array(numCourses).fill(UNVISITED);
  const order: number[] = [];
  let hasCycle = false;

  function dfs(node: number): void {
    if (hasCycle) return;
    state[node] = VISITING;

    for (const next of graph[node]) {
      if (state[next] === VISITING) {
        hasCycle = true;
        return;
      }
      if (state[next] === UNVISITED) {
        dfs(next);
      }
    }

    state[node] = VISITED;
    order.push(node);
  }

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === UNVISITED) dfs(i);
  }

  return hasCycle ? [] : order.reverse();
}
