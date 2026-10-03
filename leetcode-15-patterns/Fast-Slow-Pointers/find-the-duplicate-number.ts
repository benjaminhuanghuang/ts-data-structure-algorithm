/*

Find the Duplicate Number


Talk-through: Treat the array as a linked list where index i points to
nums[i]. Because there's one duplicate, this "list" has a cycle, and the
cycle's entry point is the duplicate value. Floyd's algorithm: find the
meeting point with slow/fast pointers, then reset one pointer to the start
and advance both one step at a time — they meet at the cycle entrance.

Time big O of n, space big O of 1.
*/
function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
