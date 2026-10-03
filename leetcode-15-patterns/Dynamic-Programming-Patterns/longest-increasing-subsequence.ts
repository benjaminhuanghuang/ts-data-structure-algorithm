/*

Longest Increasing Subsequence

(Note: the source doc lists this as LeetCode 322, but 322 is Coin Change —
this problem is actually LeetCode 300.)

Talk-through: Patience-sorting approach. Maintain `tails`, where tails[i] is
the smallest possible tail value of an increasing subsequence of length
i + 1. For each number, binary search tails for the first value >= it and
overwrite that slot (extending the subsequence or improving a future tail);
if the number is bigger than every tail, append it, growing the LIS length.
tails itself isn't a real subsequence, just a tracking structure — its length
is the answer.

Time big O of n log n, space big O of n.
*/
function lengthOfLIS(nums: number[]): number {
  const tails: number[] = [];

  for (const num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = (left + right) >> 1;
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === tails.length) {
      tails.push(num);
    } else {
      tails[left] = num;
    }
  }

  return tails.length;
}
