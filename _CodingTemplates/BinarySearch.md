# Binary Search

- 找值(target 在不在、下标几)用`[l, r]`，
- 找边界(第一个 ≥ target、插入位置)用`[l, r)`

## Template

```js
function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

### `[l,r)`

```js
// 第一个 >= target 的下标
function lowerBound(nums, target) {
  let left = 0, right = nums.length; // 右开！
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid; // mid 可能是答案，保留
  }
  return left;
}

// 第一个 > target 的下标
function upperBound(nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left;
}

```

## Complexity

Time: O(log n) — 每步砍掉一半
Space: O(1) — 迭代版就几个变量

## Sample
