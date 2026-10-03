import { balancedSplitExists } from "./can-balanced-split";

describe("balancedSplitExists", () => {
  test("returns true when a balanced split exists", () => {
    expect(balancedSplitExists([2, 1, 2, 5])).toBe(true);
  });

  test("returns false when no balanced split exists", () => {
    expect(balancedSplitExists([3, 6, 3, 4, 4])).toBe(false);
  });

  test("returns false when the array has fewer than 2 elements", () => {
    expect(balancedSplitExists([5])).toBe(false);
    expect(balancedSplitExists([])).toBe(false);
  });

  test("returns false when equal sums require an equal-value element on both sides", () => {
    expect(balancedSplitExists([1, 1])).toBe(false);
  });

  test("returns true for a simple even split", () => {
    expect(balancedSplitExists([1, 1, 2])).toBe(true);
  });
});
