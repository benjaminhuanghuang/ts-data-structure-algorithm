/*

Longest Substring Without Repeating Characters


Talk-through: The pattern is sliding window with a hashmap. 
The right pointer expands the window, left marks its start, and the map stores each character's last index. 
When I hit a repeat, I jump left to just after its last occurrence — but only if that occurrence is inside the current window. 
That >= left check is the key detail: it ignores stale positions. 
Classic trap is 'abba' — the second 'a' was last seen at index 0, which is already outside the window,
so left must not move backward. Window length is right minus left plus one, track the max. 

Time big O of n, space big O of charset size.
*/
function lengthOfLongestSubstring(s: string): number {
  const lastSeen = new Map<string, number>(); // char -> last index
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    const seenAt = lastSeen.get(ch);
    if (seenAt !== undefined && seenAt >= left) {
      left = seenAt + 1;
    }
    lastSeen.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
