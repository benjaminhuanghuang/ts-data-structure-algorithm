/*

Contiguous Array


Talk-through: Treat every 0 as -1 and every 1 as +1, then track the running
sum. If the same running sum shows up at two indices, the subarray between
them has an equal count of 0s and 1s (the +1s and -1s cancel out). Store the
first index each sum is seen at — the earliest occurrence maximizes the gap
on a later match. Seed the map with sum 0 at index -1 for a window starting
at index 0.

Time big O of n, space big O of n.
*/
function findMaxLength(nums: number[]): number {
  const firstIndex = new Map<number, number>([[0, -1]]);
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;
    if (firstIndex.has(sum)) {
      maxLen = Math.max(maxLen, i - firstIndex.get(sum)!);
    } else {
      firstIndex.set(sum, i);
    }
  }

  return maxLen;
}
