/*

Partition Equal Subset Sum


Talk-through: Equivalent to "can a subset sum to totalSum / 2". If the total
is odd, immediately impossible. Otherwise it's a 0/1 knapsack: dp[s] is true
if some subset sums to s. Iterate amounts in decreasing order so each number
is only used once per pass (increasing order would let one number apply
multiple times within the same update).

Time big O of n * target, space big O of target.
*/
function canPartition(nums: number[]): boolean {
  const total = nums.reduce((sum, num) => sum + num, 0);
  if (total % 2 !== 0) return false;

  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (const num of nums) {
    for (let s = target; s >= num; s--) {
      if (dp[s - num]) dp[s] = true;
    }
  }

  return dp[target];
}
