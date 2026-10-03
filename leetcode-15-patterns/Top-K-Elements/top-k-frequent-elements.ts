/*

Top K Frequent Elements


Talk-through: Count frequency of each number, then bucket by frequency
(bucket index 0..n holds every number that appears that many times — max
frequency is bounded by n). Read buckets from the highest frequency down,
collecting numbers until k are gathered. Avoids the log factor a heap or
full sort would add.

Time big O of n, space big O of n.
*/
function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const result: number[] = [];
  for (
    let count = buckets.length - 1;
    count >= 0 && result.length < k;
    count--
  ) {
    for (const num of buckets[count]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
}
