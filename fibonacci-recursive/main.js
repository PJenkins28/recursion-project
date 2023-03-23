function fibRecursive(num) {
  if (num < 0) {
    throw new Error("Must be a non-negative integer");
  } else if (num < 2) {
    return num === 0 ? [0] : [0, 1];
  } else {
    let arr = fibRecursive(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

//test cases
console.log(fibRecursive(1)); // [0,1]
console.log(fibRecursive(2)); // [0,1,1]
console.log(fibRecursive(3)); // [0,1,1,2]
console.log(fibRecursive(7)); // [0,1,1,2,3,5,8,13]
console.log(fibRecursive(-1)); // Error message
