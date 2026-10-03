/*

Insert Interval


Talk-through: Three phases in one pass. First, copy every interval that ends
before the new one starts (no overlap, comes before). Then merge every
interval that overlaps the new one, growing the new interval's bounds as we
go. Finally, copy every interval that starts after the merged new one ends.

Time big O of n, space big O of n.
*/
function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let [start, end] = newInterval;
  let i = 0;
  const n = intervals.length;

  while (i < n && intervals[i][1] < start) {
    result.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= end) {
    start = Math.min(start, intervals[i][0]);
    end = Math.max(end, intervals[i][1]);
    i++;
  }
  result.push([start, end]);

  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
