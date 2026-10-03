/*

Non-overlapping Intervals


Talk-through: Sort by end time (greedy interval scheduling). Always keep the
interval that ends earliest, since it leaves the most room for what comes
after. Walk through; if the next interval starts before the last kept
interval ends, it overlaps — remove it (count it) rather than the one
already kept.

Time big O of n log n, space big O of 1 (excluding sort).
*/
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let removed = 0;
  let lastEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastEnd) {
      removed++;
    } else {
      lastEnd = intervals[i][1];
    }
  }

  return removed;
}
