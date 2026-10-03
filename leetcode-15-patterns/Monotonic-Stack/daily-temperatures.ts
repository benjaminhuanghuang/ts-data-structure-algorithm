/*

Daily Temperatures


Talk-through: Monotonic decreasing stack of indices. While today's
temperature beats the temperature at the index on top of the stack, that's
the answer for that index — pop it and record today's index minus its
index. Anything left on the stack at the end never gets a warmer day, so its
answer stays 0.

Time big O of n, space big O of n.
*/
function dailyTemperatures(temperatures: number[]): number[] {
  const answer = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}
