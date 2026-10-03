/*

Range Sum Query - Immutable


Talk-through: Precompute a prefix sum array where prefix[i] is the sum of
nums[0..i-1]. Then sumRange(left, right) is just prefix[right+1] - prefix[left],
no need to re-sum the range every query.

Time big O of n to build, O(1) per query. Space big O of n.
*/
class NumArray {
  private prefix: number[];

  constructor(nums: number[]) {
    this.prefix = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}
