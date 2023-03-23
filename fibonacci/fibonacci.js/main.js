function fibonacci(num) {
  if (num < 0) {
    throw new Error("Must be a non-negative integer");
  } else if (num < 2) {
    return num === 0 ? [0] : [0, 1];
  } else {
    let arr = [0, 1];
    for (let i = 2; i <= num; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  }
}

//test cases
console.log(fibonacci(1)); // [0,1]
console.log(fibonacci(2)); // [0,1,1]
console.log(fibonacci(3)); // [0,1,1,2]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8,13]
console.log(fibonacci(-1)); // Error message
