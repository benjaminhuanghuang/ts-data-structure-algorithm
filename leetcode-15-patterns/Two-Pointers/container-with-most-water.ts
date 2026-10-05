/*

Container With Most Water


Talk-through: Two pointers from both ends. Area is limited by the shorter
line, so always move the pointer at the shorter line inward — moving the
taller one can only shrink the width without any chance of a taller wall.

Time big O of n, space big O of 1.


一个位置能接多少水，取决于它左边最高的柱子和右边最高的柱子中，较矮的那个柱子的高度。

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

/*
https://www.bilibili.com/video/BV1Hc3p6cEGL
*/
function trap(height: number[]): number {
  const n = height.length;
  // leftMax[i]: height[0..i] 范围内的最高柱子高度
  const leftMax = new Array(n);
  // rightMax[i]: height[i..n-1] 范围内的最高柱子高度
  const rightMax = new Array(n);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // 位置 i 能接的水 = min(左边最高, 右边最高) - 自身高度
  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return water;
}
