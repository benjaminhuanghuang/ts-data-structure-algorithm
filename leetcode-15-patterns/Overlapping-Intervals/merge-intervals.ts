/*

Merge Intervals


Talk-through: Sort by start time. Walk through, and if the current interval's
start is within (or touching) the last merged interval's end, extend that
interval's end instead of starting a new one. Otherwise push a new interval.

Time big O of n log n, space big O of n.
*/
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [intervals[0].slice()];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = result[result.length - 1];

    if (start <= last[1]) {
      last[1] = Math.max(last[1], end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
}
