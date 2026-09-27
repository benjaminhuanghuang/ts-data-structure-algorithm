/*
Given an array of integers (which may include repeated integers), determine if there's a way to split the array into 
two subsequences A and B such that the sum of the integers in both arrays is the same, and all of the integers in A are strictly smaller than all of the integers in B.

Note: Strictly smaller denotes that every integer in A must be less than, and not equal to, every integer in B.
*/

function balancedSplitExists(arr: number[]): boolean {
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

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str: string) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected: boolean, output: boolean) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printString(expected.toString());
    out += " Your output: ";
    out += printString(output.toString());
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1, 2, 5];
var expected_1 = true;
var output_1 = balancedSplitExists(arr_1);
check(expected_1, output_1);

var arr_2 = [3, 6, 3, 4, 4];
var expected_2 = false;
var output_2 = balancedSplitExists(arr_2);
check(expected_2, output_2);

// Add your own test cases here
