/*
Given a list of the available denominations, determine if it's possible to receive exact change for an amount of money targetMoney. 
Both the denominations and target amount will be given in generic units of that currency.

*/
export function canGetExactChange(
  targetMoney: number,
  denominations: number[]
): boolean {
  denominations.sort((a, b) => a - b);

  function dfs(target: number): boolean {
    if (target === 0) {
      return true;
    }
    if (target < 0) {
      return false;
    }

    let answer = false;
    for (let i = 0; i < denominations.length; i++) {
      if (denominations[i] > target) return false; // pruning by sorting the array
      answer = answer || dfs(target - denominations[i]);
    }
    return answer;
  }

  const answer = dfs(targetMoney);
  return answer;
}
