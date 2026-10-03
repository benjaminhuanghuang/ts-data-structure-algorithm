/*

Next Greater Element I


Talk-through: Compute "next greater" for every value in nums2 using a
monotonic decreasing stack: while the current number is bigger than the
stack's top, that top's next-greater is the current number — pop it and
record the answer, then push the current number. Whatever's left on the
stack at the end has no next greater. Store results in a map, then look up
each value from nums1.

Time big O of n + m, space big O of n.
*/
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreater = new Map<number, number>();
  const stack: number[] = [];

  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      nextGreater.set(stack.pop()!, num);
    }
    stack.push(num);
  }

  return nums1.map((num) => nextGreater.get(num) ?? -1);
}
