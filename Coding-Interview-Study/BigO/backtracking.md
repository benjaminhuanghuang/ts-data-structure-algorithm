# Backtracking

The time complexity of backtracking is generally **exponential** in the worst case.

Backtracking explores all possible combinations or configurations of a problem space. If there are **N decisions** and each decision has M possible choices, the complexity often looks like: O(M^N), M to the power of N

- Make a choice
- Recursively explore deeper
- Undo the choice (backtrack)
- Try next option

For a search tree with:
b = branching factor (choices at each step)
d = depth

Time complexity: O(b^d)
Space complexity: O(d) // due to recursion stack

## Typical Examples

| Problem             | Typical Backtracking Complexity   |
| ------------------- | --------------------------------- |
| N-Queens            | `O(N!)` or approximately `O(N^N)` |
| Sudoku solver       | `O(9^N)` (exponential)            |
| Subsets / Power set | `O(2^N)`                          |
| Permutations        | `O(N · N!)`                       |
| Combination Sum     | `O(k^N)` (exponential)            |
| Maze pathfinding    | `O(2^(rows × cols))`              |

```js
function subsets(nums) {
  const result = [];

  function backtrack(start, current) {
    result.push([...current]);
    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
}
```

O(2^N) complexity.
