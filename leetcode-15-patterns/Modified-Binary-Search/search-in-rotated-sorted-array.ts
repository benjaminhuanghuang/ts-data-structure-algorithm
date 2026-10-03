/*

Search in Rotated Sorted Array


Talk-through: Standard binary search, but at each step one half of
[left, mid] or [mid, right] is guaranteed sorted. Check which half is sorted
by comparing nums[left] to nums[mid], then check if target falls in that
sorted half's range — if so search there, otherwise search the other half.

Time big O of log n, space big O of 1.
*/
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
