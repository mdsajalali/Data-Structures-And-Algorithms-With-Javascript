// binary search problem number 704 in Leetcode

let arr = [-1, 0, 3, 5, 9, 12];
let target = 5;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, target));
