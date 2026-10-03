/*

Minimum Window Substring


Talk-through: Variable-size sliding window with a need/have frequency map.
Build a "need" count for every char in t. Expand right, and whenever a char's
count drops to meet its need, increment "satisfied". Once satisfied equals the
number of distinct chars in t, the window is valid, so try shrinking from the
left to find the smallest valid window, recording the best seen. Shrinking stops
as soon as removing the left char would break a satisfied requirement.
Classic trap: only decrement "satisfied" when a count drops BELOW its need
(not just below the previous count) and remember to still slide left even after
recording a shorter answer.

Time big O of n + m, space big O of charset size.
*/
function minWindow(s: string, t: string): string {
  if (t.length === 0 || s.length < t.length) return "";

  const need = new Map<string, number>();
  for (const ch of t) {
    need.set(ch, (need.get(ch) ?? 0) + 1);
  }

  const window = new Map<string, number>();
  let satisfied = 0;
  const required = need.size;

  let left = 0;
  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (need.has(ch)) {
      window.set(ch, (window.get(ch) ?? 0) + 1);
      if (window.get(ch) === need.get(ch)) {
        satisfied++;
      }
    }

    while (satisfied === required) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }

      const leftCh = s[left];
      if (need.has(leftCh)) {
        window.set(leftCh, window.get(leftCh)! - 1);
        if (window.get(leftCh)! < need.get(leftCh)!) {
          satisfied--;
        }
      }
      left++;
    }
  }

  return bestLen === Infinity ? "" : s.slice(bestStart, bestStart + bestLen);
}
