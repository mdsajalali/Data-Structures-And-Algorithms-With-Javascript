// define an array of numbers
let arr = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];

// define the function for linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `Target is found at position ${i} and index number ${target}`;
       // return the index of the found value
    }
  }

  return -1; // return -1 if the value is not found in the array
}

// search for a specific number in the array
let target = 33;
console.log(linearSearch(arr, target));

// output: Target is found at position 6 and index number 33