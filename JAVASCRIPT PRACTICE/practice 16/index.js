function largestNum(arr) {
  return arr.reduce((max, current) => (current > max ? current : max));
}

let arr = [10, 20, 30, 50, 6, 9, 40];
console.log(largestNum(arr));
