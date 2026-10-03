/*

Longest Common Subsequence


Talk-through: Classic 2D DP. dp[i][j] is the LCS length using the first i
chars of text1 and first j chars of text2. If the chars at i-1 and j-1
match, extend the diagonal's LCS by one; otherwise take the best of dropping
a char from either string.

Time big O of m * n, space big O of m * n.
*/
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
