/*

Find Minimum in Rotated Sorted Array


Talk-through: Binary search for the rotation point. If nums[mid] is greater
than nums[right], the minimum is somewhere to the right of mid (mid itself
can't be it). Otherwise the minimum is at mid or to its left. Narrow until
left === right.

Time big O of log n, space big O of 1.
*/
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
