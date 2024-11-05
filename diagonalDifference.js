//calculate absolute  diagonal Difference of square matrix
function diagonalDifference(arr) {
  let left = 0;
  let right = 0;
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    left += arr[i][i];
    right += arr[i][size - 1 - i];
  }
  let sum = left - right;
  if (sum < 0) sum *= -1;
  return sum;
}
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log(diagonalDifference(array));
