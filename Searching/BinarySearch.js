// binary search in an ascending array
let AsncArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let AsncTarget = 50;

function binarySearchAsnc(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `Ascending Array - Target is found at position ${target} and index number ${mid}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return "Not Found!";
}

console.log(binarySearchAsnc(AsncArray, AsncTarget));

// binary search in a descending array

let DescArray = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
let DescTarget = 40;

function binarySearchDesc(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `Descending Array - Target is found at position ${target} and index number ${mid}`;
    } else if (arr[mid] < target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return "Not Found!";
}

console.log(binarySearchDesc(DescArray, DescTarget));

// order agnostic binary search
let AgncArray = [40, 50, 70, 90, 100, 200, 300, 400, 500, 600];
let AgncTarget = 100;

function binarySearchOrderAgnostic(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let isAscending = arr[0] < arr[arr.length - 1];

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return `Order Agnostic Array - Target is found at position ${target} and index number ${mid}`;
    } else if (arr[mid] < target) {
      if (isAscending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (isAscending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return "Not Found!";
}

console.log(binarySearchOrderAgnostic(AgncArray, AgncTarget));
