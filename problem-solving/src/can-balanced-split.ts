/*
Given an array of integers (which may include repeated integers), 
determine if there's a way to split the array into two subsequences A and B 
such that the sum of the integers in both arrays is the same, 
and all of the integers in A are strictly smaller than all of the integers in B.

Note: Strictly smaller denotes that every integer in A must be less than, and not equal to, every integer in B.
*/

export function balancedSplitExists(arr: number[]): boolean {
  if (arr.length < 2) return false;

  arr.sort((a, b) => a - b);

  let l = 0;
  let r = arr.length - 1;
  let sumLeft = arr[l];
  let sumRight = arr[r];

  while (l < r - 1) {
    if (sumLeft < sumRight) {
      sumLeft += arr[++l];
    } else {
      sumRight += arr[--r];
    }
  }
  return sumLeft === sumRight && arr[l] < arr[r];
}
