/*

House Robber


Talk-through: At each house, either skip it (carry forward the best so far)
or rob it (its value plus the best total from two houses back, since the
adjacent one can't be robbed too). Roll two running values forward instead
of a full DP array.

Time big O of n, space big O of 1.
*/
function rob(nums: number[]): number {
  let prev2 = 0;
  let prev1 = 0;

  for (const num of nums) {
    const curr = Math.max(prev1, prev2 + num);
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}
