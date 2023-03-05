// find smallest letter greater than target problem number 744 in Leetcode

let letters = ["c", "f", "j"];
let target = "a";

var nextGreatestLetter = function (letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let mid = Math.floor((start + end) / 2);
  let i = 0;

  if (letters[i] == target) {
    return letters[i + 1];
  } else if (letters[mid] === target) {
    for (let i = mid; i < letters.length; i++) {
      if (letters[mid] < arr[i]) {
        return arr[i];
      }
    }
  } else letters[end] <= target;
  {
    return letters[0];
  }
};

console.log(nextGreatestLetter(letters, target));
