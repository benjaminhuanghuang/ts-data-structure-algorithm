/*

Find K Pairs with Smallest Sums


Talk-through: Pairs (nums1[i], nums2[j]) sorted means (0,0) is always the
smallest sum. Seed a min-heap with (i, 0) for the first min(k, nums1.length)
values of i — each row's smallest pair. Pop the smallest, record it, then
push that same row's next pair (i, j+1), since it's the next candidate for
that row. Repeat k times.

Time big O of k log k, space big O of k.
*/
function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return [];

  type Entry = { sum: number; i: number; j: number };
  const heap: Entry[] = [];

  const push = (entry: Entry) => {
    heap.push(entry);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (heap[parent].sum <= heap[i].sum) break;
      [heap[parent], heap[i]] = [heap[i], heap[parent]];
      i = parent;
    }
  };

  const pop = (): Entry => {
    const top = heap[0];
    const last = heap.pop()!;
    if (heap.length > 0) {
      heap[0] = last;
      let i = 0;
      const n = heap.length;
      while (true) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;
        if (left < n && heap[left].sum < heap[smallest].sum) smallest = left;
        if (right < n && heap[right].sum < heap[smallest].sum) smallest = right;
        if (smallest === i) break;
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        i = smallest;
      }
    }
    return top;
  };

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    push({ sum: nums1[i] + nums2[0], i, j: 0 });
  }

  const result: number[][] = [];
  while (result.length < k && heap.length > 0) {
    const { i, j } = pop();
    result.push([nums1[i], nums2[j]]);

    if (j + 1 < nums2.length) {
      push({ sum: nums1[i] + nums2[j + 1], i, j: j + 1 });
    }
  }

  return result;
}
