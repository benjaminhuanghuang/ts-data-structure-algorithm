import { canGetExactChange } from './can-get-changes';

describe('canGetExactChange', () => {
  test('returns false when no combination of denominations sums to the target', () => {
    expect(canGetExactChange(94, [5, 10, 25, 100, 200])).toBe(false);
  });

  test('returns true when a combination of denominations sums to the target', () => {
    expect(canGetExactChange(75, [4, 17, 29])).toBe(true);
  });

  test('returns true when the target is 0', () => {
    expect(canGetExactChange(0, [5, 10, 25])).toBe(true);
  });

  test('returns false when there are no denominations and the target is positive', () => {
    expect(canGetExactChange(10, [])).toBe(false);
  });

  test('returns true when a single denomination exactly matches the target', () => {
    expect(canGetExactChange(25, [5, 10, 25])).toBe(true);
  });
});
