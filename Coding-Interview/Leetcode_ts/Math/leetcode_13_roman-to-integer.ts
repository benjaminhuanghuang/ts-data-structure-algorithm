/*
13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/


To "VII", we use the [additive notation], 'V' + 'I' + 'I' = 5 + 1 + 1 = 7.
To "IV" we use the [subtractive  notation]. 'V' - 'I' = 5 - 1 = 4.
*/

function romanToInt(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;
  // from lowest bit to highest bit
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = romanToIntMap[s[i]];
    if (curr < prevValue) {
      result -= curr;
    } else {
      result += curr;
    }
    prevValue = curr;
  }
  return result;
}
