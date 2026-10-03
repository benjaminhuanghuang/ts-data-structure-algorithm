/*

Coin Change


Talk-through: Bottom-up DP where dp[amount] is the fewest coins to make that
amount. Build up from 0: for every amount, try every coin and take the best
of dp[amount - coin] + 1. Initialize with Infinity (unreachable) except
dp[0] = 0, the base case.

Time big O of amount * coins.length, space big O of amount.
*/
function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (const coin of coins) {
      if (coin <= a && dp[a - coin] + 1 < dp[a]) {
        dp[a] = dp[a - coin] + 1;
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
