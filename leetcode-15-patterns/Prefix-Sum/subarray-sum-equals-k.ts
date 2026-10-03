/*

Subarray Sum Equals K


Talk-through: Running prefix sum plus a frequency map. If prefixSum - k has
been seen before, every occurrence marks the start of a subarray ending here
that sums to k. Seed the map with sum 0 occurring once, for subarrays that
start at index 0. Increment the count for the current prefix sum after
checking, not before (avoid counting the empty subarray against itself).

Time big O of n, space big O of n.
*/
function subarraySum(nums: number[], k: number): number {
  const count = new Map<number, number>([[0, 1]]);
  let sum = 0;
  let result = 0;

  for (const num of nums) {
    sum += num;
    result += count.get(sum - k) ?? 0;
    count.set(sum, (count.get(sum) ?? 0) + 1);
  }

  return result;
}
