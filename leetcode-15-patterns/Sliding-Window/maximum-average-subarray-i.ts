/*

Maximum Average Subarray I


Talk-through: Fixed-size sliding window. Build the sum of the first k elements,
then slide the window one step at a time: add the element entering on the right,
subtract the element leaving on the left. Track the max sum seen, convert to
average only at the end (avoid dividing on every step).

Time big O of n, space big O of 1.
*/
function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;
  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right] - nums[right - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}
