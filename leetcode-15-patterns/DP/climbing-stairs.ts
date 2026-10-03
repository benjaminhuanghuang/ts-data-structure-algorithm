/*

Climbing Stairs


Talk-through: Ways to reach step n is ways to reach n-1 plus ways to reach
n-2 (arrive via a 1-step or a 2-step), same recurrence as Fibonacci. Only
the last two values are ever needed, so roll them forward instead of keeping
a full DP array.

Time big O of n, space big O of 1.
*/
function climbStairs(n: number): number {
  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
