/*

Largest Rectangle in Histogram


Talk-through: Monotonic increasing stack of indices. When a shorter bar
appears, every taller bar still on the stack can't extend any further right,
so pop it and compute its best rectangle: height times width, where width
spans from the new top of the stack (exclusive) to the current index
(exclusive). A sentinel 0-height bar at the end flushes anything left on the
stack.

Time big O of n, space big O of n.
*/
function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i];

    while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
      const height = heights[stack.pop()!];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}
