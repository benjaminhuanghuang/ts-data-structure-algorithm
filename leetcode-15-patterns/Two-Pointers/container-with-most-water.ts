/*

Container With Most Water


Talk-through: Two pointers from both ends. Area is limited by the shorter
line, so always move the pointer at the shorter line inward — moving the
taller one can only shrink the width without any chance of a taller wall.

Time big O of n, space big O of 1.
*/
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    best = Math.max(best, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return best;
}
