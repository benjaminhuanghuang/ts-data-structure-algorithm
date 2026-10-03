/*

Happy Number


Talk-through: Repeatedly replace n with the sum of squares of its digits.
This either reaches 1 or falls into a cycle — there's no third outcome.
Detect the cycle with slow/fast pointers over the "next value" function
instead of a seen-set, same idea as linked list cycle detection.

Time big O of log n per step (digit count is bounded), space big O of 1.
*/
function sumOfSquaredDigits(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = sumOfSquaredDigits(n);

  while (fast !== 1 && slow !== fast) {
    slow = sumOfSquaredDigits(slow);
    fast = sumOfSquaredDigits(sumOfSquaredDigits(fast));
  }

  return fast === 1;
}
