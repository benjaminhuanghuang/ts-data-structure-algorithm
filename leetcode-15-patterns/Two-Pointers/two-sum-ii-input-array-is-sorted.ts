/*

Two Sum II - Input Array is Sorted


Talk-through: Array is sorted, so two pointers from both ends converge.
If the sum is too small, the only way to grow it is moving left pointer up;
if too big, move right pointer down. Return 1-indexed positions per the
problem's contract.

Time big O of n, space big O of 1.
*/
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
